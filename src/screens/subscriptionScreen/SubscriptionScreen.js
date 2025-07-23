import React from 'react';
import {StyleSheet, SafeAreaView, View, Alert} from 'react-native';
import {HeaderCompt, SettingBtnCompt} from '../../components';
import { Colors } from '../../constants';

const SubscriptionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderCompt
        title="Subscription"
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <SettingBtnCompt
          title="Link Purchased Subscription"
          onPress={() => Alert.alert('Link Purchase')}
        />
        <SettingBtnCompt
          title="Purchase Subscription"
          onPress={() => navigation.navigate('PakagesScreen')}
        />
        <SettingBtnCompt
          title="Restore Previous Purchase"
          onPress={() => Alert.alert('Restoring...')}
        />
        <SettingBtnCompt
          title="Contact Support"
          onPress={() => Alert.alert('Opening Email...')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor:  Colors.primary},
  content: {padding: 20},
});

export default SubscriptionScreen;
