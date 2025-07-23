import React from 'react';
import {StyleSheet, SafeAreaView, View, Alert} from 'react-native';
import { HeaderCompt, SettingBtnCompt } from '../../components';
import { Colors } from '../../constants';
 

const MyAccountScreen = ({navigation}) => {
  const handleClearCache = () =>
    Alert.alert('Cache Cleared', 'All cached data has been removed.');
  const handleDeleteData = () => {
    Alert.alert(
      'Delete Data',
      'Are you sure you want to delete all your data? This action cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', style: 'destructive'},
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderCompt
        title="My Account"
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <SettingBtnCompt
          title="Language"
          value="English"
          onPress={() => Alert.alert('Change Language')}
        />
        <SettingBtnCompt title="Clear Cache" onPress={handleClearCache} />
        <SettingBtnCompt
          title="Delete Data"
          onPress={handleDeleteData}
          isDestructive
        />
        <SettingBtnCompt
          title="Login"
          onPress={() => Alert.alert('Navigate to Login')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor:  Colors.primary},
  content: {padding: 20},
});

export default MyAccountScreen;
