import {Image, StyleSheet, Text, View} from 'react-native';
import React, { memo } from 'react';
import {Colors, FontFamily} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome'; // For stars

const RatingsCard = () => (
  <View style={styles.ratingsContainer}>
    <Image
      //   source={require('../../assets/images/laurel_wreath.png')}
      style={styles.wreathImage}
    />
    <View style={styles.storesContainer}>
      <View style={styles.store}>
        <Icon name="apple" size={28} color={Colors.white} />
        <Text style={styles.storeText}>APP STORE</Text>
      </View>
      <View style={styles.store}>
        <Icon name="play" size={24} color={Colors.white} />
        <Text style={styles.storeText}>PLAY STORE</Text>
      </View>
    </View>
    <View style={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <Icon key={i} name="star" size={20} color="#FFC107" />
      ))}
    </View>
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>450K+</Text>
        <Text style={styles.statLabel}>downloads</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>1.5K</Text>
        <Text style={styles.statLabel}>reviews</Text>
      </View>
    </View>
  </View>
);
export default memo(RatingsCard);

const styles = StyleSheet.create({
  ratingsContainer: {
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  wreathImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    position: 'absolute',
    top: -15,
  },
  storesContainer: {flexDirection: 'row', zIndex: 1},
  store: {alignItems: 'center', marginHorizontal: 20},
  storeText: {
    fontFamily: FontFamily.Bold,
    fontSize: 10,
    color: Colors.white,
    marginTop: 4,
  },
  stars: {flexDirection: 'row', marginVertical: 10},
  statsContainer: {flexDirection: 'row', marginTop: 10},
  statItem: {alignItems: 'center', marginHorizontal: 25},
  statNumber: {fontFamily: FontFamily.Bold, fontSize: 20, color: Colors.white},
  statLabel: {
    fontFamily: FontFamily.Regular,
    fontSize: 12,
    color: Colors.white,
  },
});
