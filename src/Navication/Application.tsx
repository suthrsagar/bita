import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ExploreScreen from '../screen/Explore/explore';
import Post from '../screen/Post/Post';
import Help from '../screen/Chat/chat';
import Mange from '../screen/Mange/mange'
 
// MainTabs ya ApplicationNavigator.js/tsx
import MangeStack from './MangeStack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator   
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons: Record<string, string> = {
          Explore: 'home',
          Post: 'plus',
          Help: 'envelope',
          Mange: 'user',
        };
        return <FontAwesome name={icons[route.name] || 'circle'} size={33} color={color}  />;
     },
      tabBarStyle: { backgroundColor: 'white' },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
  
      headerShown: true,
    })}
   >
    <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Post" component={Post} options={{ headerShown: false }} />
    <Tab.Screen name="Help" component={Help} options={{ headerShown: false }} />
    <Tab.Screen name="Mange" component={MangeStack} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const ApplicationNavigators = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigators;
