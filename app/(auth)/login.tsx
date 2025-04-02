import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert, Platform } from "react-native";
import { useState } from "react";
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import { useAuth } from '@/contexts/AuthContext';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { emailSignIn, promptAsync } = useAuth();

  async function handleEmailSignIn() {
    try {
      if (!email || !password) {
        Alert.alert('Empty Fields', 'Please fill in all fields.');
        return;
      }
      await emailSignIn(email, password);
    } catch (error) {
      Alert.alert('Sign In Error', 'There was a problem signing in. Please check your credentials.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require("@/assets/images/loginBackground.png")}
          style={styles.headerBackground}
        />
        <View style={styles.headerContent}>
          <Text style={styles.title}>Hey there!</Text>
          <Text style={styles.subtitle}>Please sign in to continue</Text>
        </View>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleEmailSignIn}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>
        
        {Platform.OS === "ios" ? (
          <View style={styles.otherButtonContainer}>
            <TouchableOpacity style={[styles.googleButton, styles.halfButton]} onPress={() => promptAsync()}>
              <Image 
                source={require("@/assets/images/googleLogo.png")}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text style={styles.googleButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.googleButton, styles.halfButton]} onPress={() => console.log("sign in with apple")}>
              <Image 
                source={require("@/assets/images/appleLogo.png")}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text style={styles.googleButtonText}>Apple</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
            <Image 
              source={require("@/assets/images/googleLogo.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            <Text style={styles.googleButtonText}>Login with Google</Text>
          </TouchableOpacity>
        )}


        

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>or </Text>
          <TouchableOpacity onPress={() => router.replace("/signup")}>
            <Text style={styles.signupLink}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    position: "relative",
    height: 300,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerContent: {
    position: "absolute",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#21502F",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#21502F",
    opacity: 0.9,
  },
  form: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#FFFBED",
    marginTop: -30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 15,
    marginBottom: 25,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  loginButton: {
    height: 50,
    backgroundColor: "#A5FFB4",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#21502F",
    fontSize: 16,
    fontWeight: "700",
  },
  googleButton: {
    height: 50,
    backgroundColor: "#E8F8E0",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  googleButtonText: {
    color: "#21502F",
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
  otherButtonContainer: {
    flexDirection: "row", // Align buttons side by side on iOS
    justifyContent: "space-between", // Space them evenly
    marginBottom: 24,
  },
  halfButton: {
    width: "48%", // Reduce button width to fit side by side
  },  
  signupContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#666",
  },
  signupLink: {
    color: "#7ED750",
    fontWeight: "600",
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});