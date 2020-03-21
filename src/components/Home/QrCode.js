import React from 'react';
import {View, Text, Button} from 'react-native';

export function QrCodeComponent() {
    return (
        <View>
            <Text>Home container</Text>

            <Button title={"Zahlen"} onPress={() => {}} />
            <Button title={"Empfangen"} onPress={() => {}} />
            <Button title={"Qr Code Scannen"} onPress={() => {}} />
            <Button title={"Qr Code Zeigen"} onPress={() => {}} />
            <Button title={"Wo kann ich mit GToken Bezahlen"} onPress={() => {}} />
            <Button title={"Einstellungen"} onPress={() => {}} />
        </View>
    );
}
