import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import {Colors, FontFamily} from '../../constants';
import {HeaderCompt, SettingBtnCompt} from '../../components';

// In a real app, get this from a library like react-native-device-info
const APP_VERSION = '3.25.4+234';

const LegalInfoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderCompt title="Legal Info" onBackPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <SettingBtnCompt
          title="Privacy Policy"
          onPress={() => Alert.alert('Open Privacy Policy')}
        />
        <SettingBtnCompt
          title="Terms of Use"
          onPress={() => Alert.alert('Open Terms of Use')}
        />

        {/* Special non-tappable row for version info */}
        <View style={styles.versionRow}>
          <Text style={styles.title}>App Version</Text>
          <Text style={styles.value}>{APP_VERSION}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  content: {padding: 20},
  // Re-using styles from SettingBtnCompt for visual consistency
  versionRow: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 12,
  },
  title: {fontFamily: FontFamily.SemiBold, color: Colors.white, fontSize: 16},
  value: {
    fontFamily: FontFamily.Regular,
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    marginTop: 4,
  },
});

export default LegalInfoScreen;
