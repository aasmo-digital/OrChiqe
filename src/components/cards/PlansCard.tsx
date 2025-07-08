import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { memo } from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // For hearts
import {FontFamily} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome'; // For stars

const PlansCard = ({plan, isSelected, onSelect}: any) => {
  const priceParts = plan.price.toFixed(2).toString().split('.');
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.planCard, isSelected && styles.selectedPlanCard]}>
      {isSelected && (
        <View style={styles.checkWrapper}>
          <Icon name="check-circle" size={24} color="#4CAF50" />
        </View>
      )}
      {plan.isBestValue && (
        <View style={styles.bestValueBanner}>
          <Text style={styles.bestValueText}>Best Value</Text>
        </View>
      )}

      <Text style={styles.planTitle}>{plan.title}</Text>
      {plan.features.map((feature, index) => (
        <View key={index} style={styles.featureItem}>
          <MaterialCommunityIcon
            name="heart"
            size={16}
            color="#FFC107"
            style={{marginRight: 8}}
          />
          <Text
            style={[
              styles.featureText,
              !feature.available && styles.featureUnavailable,
            ]}>
            {feature.text}
          </Text>
        </View>
      ))}
      <View style={styles.priceContainer}>
        <Text style={styles.priceCurrency}>$</Text>
        <Text style={styles.priceAmount}>{priceParts[0]}</Text>
        <Text style={styles.priceCents}>{priceParts[1]}</Text>
        <Text style={styles.priceNote}>{plan.priceNote}</Text>
      </View>
      {plan.monthlyEquivalent && (
        <Text style={styles.monthlyEquivalent}>{plan.monthlyEquivalent}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(PlansCard);

const styles = StyleSheet.create({
  planCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedPlanCard: {borderColor: '#007AFF'},
  checkWrapper: {position: 'absolute', top: -12, right: -12},
  bestValueBanner: {
    position: 'absolute',
    top: 10,
    right: -20,
    backgroundColor: '#FFC107',
    paddingHorizontal: 20,
    paddingVertical: 4,
    transform: [{rotate: '45deg'}],
    borderRadius: 50,
  },
  bestValueText: {fontFamily: FontFamily.Bold, fontSize: 10, color: 'white'},
  planTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: 16,
    color: '#0B3A4A',
    marginBottom: 15,
  },
  featureItem: {flexDirection: 'row', alignItems: 'center', marginBottom: 8},
  featureText: {fontFamily: FontFamily.Regular, fontSize: 12, color: '#333'},
  featureUnavailable: {textDecorationLine: 'line-through', color: '#aaa'},
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15,
  },
  priceCurrency: {
    fontFamily: FontFamily.Bold,
    fontSize: 14,
    color: '#0B3A4A',
    marginTop: 4,
  },
  priceAmount: {fontFamily: FontFamily.Bold, fontSize: 32, color: '#0B3A4A'},
  priceCents: {
    fontFamily: FontFamily.Bold,
    fontSize: 14,
    color: '#0B3A4A',
    marginTop: 4,
  },
  priceNote: {
    fontFamily: FontFamily.Regular,
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
    marginLeft: 4,
    marginBottom: 5,
  },
  monthlyEquivalent: {
    fontFamily: FontFamily.Regular,
    fontSize: 12,
    color: '#007AFF',
    marginTop: 4,
  },
});
