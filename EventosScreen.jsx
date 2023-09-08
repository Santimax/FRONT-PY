import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const EventosScreen = () =>{
    const navigationHook = useNavigation();    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Eventos</Text>
        <Button
            title="Go to Home"
            onPress={() => navigationHook.navigate('Home')}
        />
        </View>
    );
}
export default EventosScreen