import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventosScreen from './EventosScreen';

const HomeScreen = () =>{
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
            title="Go to Eventos"
            onPress={() => navigation.navigate('EventosScreen')}
        />
        </View>
    );
}
export default HomeScreen