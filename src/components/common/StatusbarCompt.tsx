import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '../../constants';

const StatusbarCompt = ({translucent, backgroundColor,barStyle}: any) => (
  <StatusBar
    translucent={translucent}
    backgroundColor={backgroundColor || Colors?.primary}
    barStyle={barStyle || 'light-content'}
  />
);

export default memo(StatusbarCompt);
