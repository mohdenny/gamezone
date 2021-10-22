import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const HomeStack = createStackNavigator();

export default function Navigator() {
    return (
    <NavigationContainer>      
        <HomeStack.Navigator
            screenOptions={{
                headerTintColor: '#444',
                headerStyle: { 
                    backgroundColor: '#eee', height: 80
                }
            }}
        >
            <HomeStack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title: 'GameZone'
                }}
            />
            <HomeStack.Screen 
                name="ReviewDetails" 
                component={ReviewDetails}
                options={{
                    title: 'Review Details'
                }}
            />
        </HomeStack.Navigator>
    </NavigationContainer>
    );
}