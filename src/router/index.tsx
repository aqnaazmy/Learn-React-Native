import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Splash, Learn, Profile} from '../pages';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Learn" component={Learn} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}} />
        <Stack.Screen name="ManinApp" component={MainApp} options={{ headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})