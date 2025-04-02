import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
    GoogleAuthProvider,
    signInWithCredential,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import { useRouter, useSegments } from 'expo-router';

import * as Google from "expo-auth-session/providers/google";

import Constants from 'expo-constants';


export const AuthContext = createContext<any>(null);

export function useAuth() {
    return useContext(AuthContext);
}



export function AuthProvider({ children }: React.PropsWithChildren) {
    const rootSegment = useSegments()[0];
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID_IOS,
        androidClientId: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID_ANDROID,
    })

    async function userSignOut() {
        await signOut(auth)
            .then(() => {
                setUser(null);
                router.replace("/(auth)/login");
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    }

    async function emailSignUp(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                console.log('User signed up:', user);

            })
            .catch((error) => {
                console.error('Error signing up with email and password:', error);
                throw error;
            });
    }

    async function emailSignIn(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (error) {
            console.error('Error signing in with email and password:', error);
            throw error;
        }
    }

    useEffect(() => {
        if (response?.type == "success") {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential)
                .then((result) => {
                    const user = result.user;
                    setUser(user);
                    console.log('User signed in:', user);
                })
                .catch((error) => {
                    console.error('Error signing in with Google:', error);
                });
        }
    }, [response])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                console.log(JSON.stringify(currentUser, null, 2));
                setUser(currentUser);
                console.log(rootSegment);
                router.replace("/(app)/")
            } else {
                setUser(null);
                router.replace("/(auth)/login");
            }
        });

        return unsubscribe;
    }, [])
    return (
        <AuthContext.Provider
            value={{
                user: user,
                emailSignIn,
                emailSignUp,
                userSignOut,
                promptAsync,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}