import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    // get param
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text>{ title }</Text>
            <Text>{ body }</Text>
            <Text>{ rating }</Text>
        </View>
    )
}