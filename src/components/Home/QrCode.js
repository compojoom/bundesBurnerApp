import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

export function QrCodeComponent() {
    const [barcode, setBarcode] = useState(null);
    const dynamicStyles = StyleSheet.create({
        crosshairBorderHighlight: {opacity: 1},
    });

    return (
        <View style={{flex: 1}}>
            <Text>{barcode && barcode.url}</Text>
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                aspect={RNCamera.constants && RNCamera.constants.Aspect.fill}
                barcodeScannerEnabled={true}
                captureAudio={false}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({barcodes}) => {
                    console.log(barcodes);

                    if (barcodes.length) {
                        setBarcode(barcodes[0]);
                    }
                }}>
                <View style={styles.overlay}>
                    <View
                        style={styles.crosshair}
                        ref={element => {
                            this.crosshair = element;
                        }}>
                        <View
                            style={[
                                styles.crosshairBorder,
                                styles.topLeft,
                                dynamicStyles.crosshairBorderHighlight,
                            ]}
                        />
                        <View
                            style={[
                                styles.crosshairBorder,
                                styles.topRight,
                                dynamicStyles.crosshairBorderHighlight,
                            ]}
                        />
                        <View
                            style={[
                                styles.crosshairBorder,
                                styles.bottomLeft,
                                dynamicStyles.crosshairBorderHighlight,
                            ]}
                        />
                        <View
                            style={[
                                styles.crosshairBorder,
                                styles.bottomRight,
                                dynamicStyles.crosshairBorderHighlight,
                            ]}
                        />
                    </View>
                </View>
            </RNCamera>
        </View>
    );
}

const crosshairMargin = 10;
const crosshairBorderWidth = 8;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    crosshair: {
        width: 300,
        height: 300,
    },
    crosshairBorder: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderColor: '#FFFFFF',
        borderWidth: crosshairBorderWidth,
        opacity: 1,
    },
    topLeft: {
        top: crosshairMargin,
        left: crosshairMargin,
        borderBottomWidth: 0,
        borderRightWidth: 0,
    },
    topRight: {
        top: crosshairMargin,
        right: crosshairMargin,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
    },
    bottomLeft: {
        bottom: crosshairMargin,
        left: crosshairMargin,
        borderTopWidth: 0,
        borderRightWidth: 0,
    },
    bottomRight: {
        bottom: crosshairMargin,
        right: crosshairMargin,
        borderTopWidth: 0,
        borderLeftWidth: 0,
    },
});
