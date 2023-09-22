import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList, SafeAreaView,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';
import axios from 'axios';

const DetalleEvento = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigationHook = useNavigation();    
    const handleClick = () => {    
    navigationHook.navigate('Home')  
};

useEffect(() => {
    const fetchData = async () => {
    try {
    const response = await axios.get(
        'http://a-phz2-cidi-045:3000/API/eventos',
    );
    setData(response.data);
    setLoading(false);
    } catch (e) {
    setError(e);
    setLoading(false);
}
};

fetchData();
}, []);

if (loading) {
return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator />
    </View>
);
}

if (error) {
return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>An error occurred</Text>
    </View>
);
}
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'bottom' }}>
    <Text>Estos son los detalles de el evento:</Text>
    <Text style={{fontSize: 14}}>{item.nombreEvento}</Text>
    </View>
);
};
export default DetalleEvento;