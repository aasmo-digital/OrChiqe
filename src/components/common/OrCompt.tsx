import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Colors, FontFamily} from '../../constants';

const OrCompt = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{height: 0.5, backgroundColor: Colors.black, flex: 1}} />
      <Text style={styles.orText}>OR</Text>
      <View style={{height: 0.5, backgroundColor: Colors.black, flex: 1}} />
    </View>
  );
};

export default memo(OrCompt);

const styles = StyleSheet.create({
  orText: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 14,
    color: Colors.black,
    marginVertical: 16,
    paddingHorizontal: 5,
  },
});
