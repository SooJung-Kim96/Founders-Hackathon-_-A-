import React from 'react';
import StartScreen from './Screen/start.js';
import LoginScreen from './Screen/login.js';
import RegisterScreen from './Screen/register.js';
import MainScreen from './Screen/main.js';
import ChatScreen from './Screen/chat.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Main" component={MainScreen}/>
      <Tab.Screen name = "Chat" component={ChatScreen}/>
    </Tab.Navigator>
  )
}

export default App;