import React from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Icon} from '../Utils/Icon';
import {useNavigation} from '@react-navigation/native';

import {markers} from '../../dummyData/markers';

export function BusinessesComponent() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 50.014123,
          longitude: 8.263218,
          latitudeDelta: 0.012,
          longitudeDelta: 0.011,
        }}>
        {Object.keys(markers).map(key => {
          const marker = markers[key];
          return (
            <Marker
              title={marker.title}
              key={marker.id}
              onPress={() => {
                navigation.navigate('business', {id: marker.id});
              }}
              coordinate={marker.coordinates}>
              <Icon name={marker.icon} style={{color: 'red', fontSize: 22}} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}
