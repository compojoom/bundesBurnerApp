import React from 'react';
import {View, Text} from 'react-native';
import {HomeComponent} from '../../components/Home/Home';

export function HomeContainer({navigation}) {
    return (
        <HomeComponent navigation={navigation}/>
    );
}
