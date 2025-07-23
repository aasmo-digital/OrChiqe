 
import React, { memo } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily } from '../../constants';

const SettingBtnCompt = ({ title, value, onPress, isDestructive = false }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={[styles.title, isDestructive && styles.destructiveText]}>{title}</Text>
      {value && <Text style={styles.value}>{value}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: FontFamily.SemiBold,
    color: Colors.white,
    fontSize: 16,
  },
  value: {
    fontFamily: FontFamily.Regular,
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
  },
  destructiveText: {
    color: '#FF6B6B', // A light red color for destructive actions
  },
});

export default memo(SettingBtnCompt);