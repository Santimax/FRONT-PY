import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () =>{
    const navigationHook = useNavigation();    
    const handleClick = () => {    
        console.log('boton');
        navigationHook.navigate('Eventos')  
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
            title="Go to Eventos"
            onPress={handleClick}
        />
        </View>
    );
}
export default HomeScreen