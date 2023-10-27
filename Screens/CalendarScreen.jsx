import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';
//import Axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Logo from './../Cosas varias/loguito';

const CalendarScreen = () =>{
    const navigationHook = useNavigation();    
    const handleClick = () => {    
        console.log('boton');
        navigationHook.navigate('Eventos')  
    };

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3a3eb0'}}>
        <Logo/>
        <Text style={{color: 'white'}}>Home</Text>
        <Button title="Eventos" onPress={handleClick}/>
        </View>
    );
}
export default CalendarScreen