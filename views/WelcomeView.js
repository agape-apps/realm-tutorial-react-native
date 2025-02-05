// The screen that allows a user to log in or register a user.

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { useAuth } from '../providers/AuthProvider';
import styles from '../stylesheet';

export function WelcomeView({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate('Projects');
    }
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log('Press sign in');
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder='email'
          style={styles.inputStyle}
          autoCapitalize='none'
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder='password'
          style={styles.inputStyle}
          secureTextEntry
        />
      </View>
      <Button
        containerStyle={styles.inputContainer}
        type='outline'
        onPress={onPressSignIn}
        title='Sign In'
      />
      <Button
        containerStyle={styles.inputContainer}
        type='outline'
        onPress={onPressSignUp}
        title='Sign Up'
      />
    </View>
  );
}
