// A button that handles user log out.

import * as React from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../providers/AuthProvider';

export function Logout() {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  return (
    <Button
      title='Logout'
      type='clear'
      onPress={() => {
        Alert.alert('Log Out', null, [
          {
            text: 'Yes, Log Out',
            style: 'destructive',
            onPress: () => {
              signOut();
              navigation.popToTop();
            },
          },
          { text: 'Cancel', style: 'cancel' },
        ]);
      }}
    />
  );
}
