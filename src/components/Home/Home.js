import React from 'react';
import {View, Text, Button} from 'react-native';

export function HomeComponent(props) {
    const {navigation} = props
    return (
        <View>
            <Text>Home container</Text>

            <Button title={"Zahlen"} onPress={() => {}} />
            <Button title={"Empfangen"} onPress={() => {}} />
            <Button title={"Qr Code Scannen"} onPress={() => {navigation.navigate('scanQR')}} />
            <Button title={"Qr Code Zeigen"} onPress={() => {}} />
            <Button title={"Wo kann ich mit GToken Bezahlen"} onPress={() => {}} />
            <Button title={"Einstellungen"} onPress={() => {}} />
        </View>
    );
}
