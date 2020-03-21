import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export function HomeComponent(props) {
  const {navigation} = props;
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          justifycontent: 'center',
          alignItems: 'center',
          margin: 20,
        }}>
        <Text style={{fontSize: 38}}>20</Text>
        <Text>DiGi tokens</Text>
      </View>
      <View style={styles.row}>
        <Button title={'Zahlen'} onPress={() => {}} />
        <Button title={'Empfangen'} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <Button
          title={'Qr Code Scannen'}
          onPress={() => {
            navigation.navigate('scanQR');
          }}
        />
        <Button
          title={'Qr Code Zeigen'}
          onPress={() => {
            navigation.navigate('myQrCode');
          }}
        />
      </View>

      <Button title={'Einstellungen'} onPress={() => {}} />
    </View>
  );
}
