import React from 'react';
import {BusinessContainer} from '../../containers/Business/Business';

export function BusinessScreen({navigation, route}) {
  return <BusinessContainer id={route.params.id} navigation={navigation} />;
}
