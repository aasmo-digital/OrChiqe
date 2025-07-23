import {Image, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Colors, FontFamily} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome'; // For stars

const ReviewCard = ({review}: any) => (
  <View style={styles.reviewCard}>
    <View style={styles.reviewHeader}>
      <Image source={{uri: review.image}} style={styles.reviewAvatar} />
      <View style={{flex: 1}}>
        <View style={styles.reviewRating}>
          {[...Array(review.rating)].map((_, i) => (
            <Icon key={i} name="star" size={14} color="#FFC107" />
          ))}
        </View>
        <Text style={styles.reviewName}>{review.name}</Text>
      </View>
      <Text style={styles.reviewDate}>{review.date}</Text>
    </View>
    <Text style={styles.reviewText}>{review.text}</Text>
  </View>
);

export default memo(ReviewCard);

const styles = StyleSheet.create({
  reviewCard: {
    borderRadius: 16,
    padding: 15,
    width: 300,
    marginRight: 15,
    borderWidth: 0.5,
    borderColor: Colors.grayLight,
    backgroundColor: Colors.white,
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
  },
  reviewHeader: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  reviewAvatar: {width: 40, height: 40, borderRadius: 20, marginRight: 10},
  reviewRating: {flexDirection: 'row', marginBottom: 2},
  reviewName: {fontFamily: FontFamily.SemiBold, color: Colors.black},
  reviewDate: {
    fontFamily: FontFamily.Regular,
    color: '#aaa',
    fontSize: 12,
    marginLeft: 'auto',
  },
  reviewText: {
    fontFamily: FontFamily.Regular,
    color: Colors.grayDark,
    fontSize: 14,
    lineHeight: 20,
  },
});
