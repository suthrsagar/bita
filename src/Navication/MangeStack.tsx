// MangeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mange from '../screen/Mange/mange'; // 👈 Your Mange screen
import AccountSettingScreen from '../screen/Mange/AccountSettingsScreen'; // 👈 Target screen
import LoginScreen from '../screen/Mange/LoginScreen';
const Stack = createStackNavigator();

const MangeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MangeMain"
        component={Mange}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountSetting"
        component={AccountSettingScreen}
        options={{ title: 'Account Settings' }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'sagar' }}
      />
    </Stack.Navigator>
  );
};

export default MangeStack;
