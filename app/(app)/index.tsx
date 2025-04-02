import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function Index() {
  const { userSignOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MealMate</Text>
      <Text style={styles.subtitle}>Your personal meal planning assistant</Text>
      <TouchableOpacity  onPress={userSignOut}>
            <Text>Login with Google</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
