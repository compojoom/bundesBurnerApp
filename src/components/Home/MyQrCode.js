import React from 'react';
import {View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export function MyQrCodeComponent() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <QRCode value="https://github.com/compojoom/bundesBurnerApp" size={250} />
    </View>
  );
}
