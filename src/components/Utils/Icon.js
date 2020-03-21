import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export const Icon = props => {
  const {type = 'solid', name, ...rest} = props;

  if (type === 'solid') {
    return <FontAwesome name={name} solid {...rest} />;
  }

  return <FontAwesome name={name} {...rest} />;
};
