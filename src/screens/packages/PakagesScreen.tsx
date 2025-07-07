import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For stars
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // For hearts
import {Colors, FontFamily} from '../../constants'; // Assuming you have these
import {ButtonCompt, StatusbarCompt} from '../../components'; // Assuming your button component
import styles from './packages.styles';

// --- Mock Data (In a real app, this would come from your server) ---
const PLANS_DATA = [
  {
    id: 'basic',
    title: 'BASIC',
    price: 8.33,
    priceNote: '/ month',
    features: [
      {text: '700 video activities & new added every week', available: true},
      {text: 'A.I. Kids Audio Stories', available: false},
      {text: 'Kids Mood Tracker', available: false},
      {text: 'Family Sharing', available: false},
    ],
  },
  {
    id: 'ultimate',
    title: 'ULTIMATE',
    price: 47.06,
    priceNote: '/ year',
    monthlyEquivalent: '$3.92 / month',
    isBestValue: true,
    features: [
      {text: '700 video activities & new added every week', available: true},
      {text: 'A.I. Kids Audio Stories', available: true},
      {text: 'Kids Mood Tracker', available: true},
      {text: 'Family Sharing', available: true},
    ],
  },
];

const REVIEWS_DATA = [
  {
    id: '1',
    name: '@Winnpooh009',
    date: '24 December',
    rating: 5,
    text: "I love the topics that I can discuss with my kids and hear their ideas is amazing.... I'm beyond grateful to do the science projects with my babies... I feel like a teacher, but it's honestly brings so much joy to my babies and the faces and excitement is a beautiful blessing🥰🥰🥰",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: '@DavidB',
    date: '15 November',
    rating: 5,
    text: 'I really like the "something new" section: It always suggests things to be very creative about. Keep it up!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

// --- Sub-Components ---

const BenefitItem = ({text}) => (
  <View style={styles.benefitItem}>
    <MaterialCommunityIcon name="heart" size={20} color="#FF6B6B" />
    <Text style={styles.benefitText}>{text}</Text>
  </View>
);

const PlanCard = ({plan, isSelected, onSelect}) => {
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

const ReviewCard = ({review}) => (
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

const Ratings = () => (
  <View style={styles.ratingsContainer}>
    <Image
      //   source={require('../../assets/images/laurel_wreath.png')}
      style={styles.wreathImage}
    />
    <View style={styles.storesContainer}>
      <View style={styles.store}>
        <Icon name="apple" size={28} color="#A2A2A2" />
        <Text style={styles.storeText}>APP STORE</Text>
      </View>
      <View style={styles.store}>
        <Icon name="play" size={24} color="#A2A2A2" />
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

// --- Main Screen Component ---
const PakagesScreen = () => {
  const [selectedPlanId, setSelectedPlanId] = useState('ultimate');

  return (
    <SafeAreaView style={styles.container}>
        <StatusbarCompt />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.benefits}>
            <Text style={styles.heroTitle}>Everyday Bonding With Kid</Text>
            <BenefitItem text="stronger bond" />
            <BenefitItem text="journey of lasting memories" />
            <BenefitItem text="meaningful connection" />
            <BenefitItem text="and become the best parent you can be!" />
          </View>
          <Image
            // source={require('../../assets/images/hero_illustration.png')} // Add this image to your assets
            style={styles.heroImage}
          />
        </View>

        {/* Plans Section */}
        <Text style={styles.investTitle}>Invest In Your Time With Kids</Text>
        <View style={styles.plansContainer}>
          {PLANS_DATA.map(plan => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isSelected={selectedPlanId === plan.id}
              onSelect={() => setSelectedPlanId(plan.id)}
            />
          ))}
        </View>

        {/* Customer Stories Section */}
        <Text style={styles.sectionTitle}>Customer Stories</Text>
        <FlatList
          data={REVIEWS_DATA}
          renderItem={({item}) => <ReviewCard review={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
        />

        {/* Ratings Section */}
        <Ratings />
      </ScrollView>

      {/* Sticky Footer Buttons */}
      <View style={styles.footer}>
        <ButtonCompt
          title="Start 7-Day Free Trial"
          style={styles.trialButton}
          onPress={() => Alert.alert('----')}
        />
        <ButtonCompt
          title="I've Already Purchased"
          style={styles.purchasedButton}
          textStyle={styles.purchasedButtonText}
          onPress={() => Alert.alert('----')}
        />
        <Text style={styles.cancelText}>Cancel Anytime</Text>
        <View style={styles.footerLinks}>
          <TouchableOpacity>
            <Text style={styles.footerLinkText}>Restore Purchase</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLinkText}>
              Privacy Policy & Terms Of Use
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PakagesScreen;
