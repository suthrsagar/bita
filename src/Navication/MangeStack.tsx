// MangeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Mange from '../screen/Mange/mange';
import AccountSettingScreen from '../screen/Mange/AccountSettingsScreen';
import LoginScreen from '../screen/Mange/LoginScreen';
import MyPosts from '../screen/Mange/MyPostsScreen';
import Settings from '../screen/Mange/SettingsScreen'; // Fixed

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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyPosts"
        component={MyPosts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MangeStack;
