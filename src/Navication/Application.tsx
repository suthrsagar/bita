import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ExploreScreen from '../screen/Explore/explore'
import Post from '../screen/Post/Post.js'
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons: Record<string, string> = {
          Explore: 'home',
          Login: 'user', 
        };
        return <FontAwesome name={icons[route.name] || 'circle'} size={size} color={color} />;
      },
      tabBarStyle: { backgroundColor: 'white' },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: true,
    })}
  >
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Post" component={Post} />
  </Tab.Navigator>
);


// Navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator
const ApplicationNavigators = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Login" component={Post} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigators;
