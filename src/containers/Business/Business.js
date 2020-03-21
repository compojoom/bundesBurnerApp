import React, {useEffect} from 'react';
import {BusinessComponent} from '../../components/Businesses/Business';
import {markers} from '../../dummyData/markers';

export function BusinessContainer({id, navigation}) {
  const marker = markers[id];

  useEffect(() => {
    navigation.setOptions({
      title: marker.title,
    });
  }, [marker.title]);

  return <BusinessComponent marker={marker} />;
}
