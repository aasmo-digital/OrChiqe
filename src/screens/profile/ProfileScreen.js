import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, FontFamily} from '../../constants';
import styles from './profile.style';

// --- SUB-COMPONENT ---
const ProfileRow = ({icon, text, onPress}) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Feather
      name={icon}
      size={22}
      color={Colors.white}
      style={styles.rowIcon}
    />
    <Text style={styles.rowText}>{text}</Text>
    <Feather name="chevron-right" size={22} color={Colors.white} />
  </TouchableOpacity>
);

// --- MAIN COMPONENT ---
const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.mainTitle}>Profile</Text>

        {/* Saved Ideas Info Box */}
        <View style={styles.infoBox}>
          <Feather name="bookmark" size={24} color={Colors.white} />
          <Text style={styles.infoText}>
            Use this button, to save ideas for later
          </Text>
        </View>

        {/* Menu */}
        <Text style={styles.sectionTitle}>My Profile</Text>
        <View style={styles.menuContainer}>
          <ProfileRow
            icon="award"
            text="Subscription"
            onPress={() => navigation.navigate('PakagesScreen')}
          />
          <ProfileRow icon="help-circle" text="Help & Support" />
          <ProfileRow icon="message-square" text="Feedback & Suggestions" />
          <ProfileRow icon="user" text="My Account" />
          <ProfileRow icon="info" text="Legal Info" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
