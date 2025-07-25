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
import {
  ButtonCompt,
  PlansCard,
  RatingsCard,
  ReviewCard,
  StatusbarCompt,
} from '../../components'; // Assuming your button component
import styles from './packages.styles';
import {PLANS_DATA, REVIEWS_DATA} from './packages.const';
import {ROUTE_NAMES} from '../../constants/routes';

// --- Sub-Components ---

const BenefitItem = ({text}: any) => (
  <View style={styles.benefitItem}>
    <MaterialCommunityIcon name="heart" size={20} color="#FF6B6B" />
    <Text style={styles.benefitText}>{text}</Text>
  </View>
);

// --- Main Screen Component ---
const PackageScreen = ({navigation}: any) => {
  const [selectedPlanId, setSelectedPlanId] = useState('ultimate');

  // const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [sortedPlans, setSortedPlans] = useState(PLANS_DATA);

  const handleSelectPlan = planId => {
    setSelectedPlanId(planId);

    const selected = PLANS_DATA.find(p => p.id === planId);
    const rest = PLANS_DATA.filter(p => p.id !== planId);

    setSortedPlans([selected, ...rest]);
  };

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
        <View>
          <FlatList
            data={sortedPlans}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <PlansCard
                plan={item}
                isSelected={selectedPlanId === item.id}
                // onSelect={() => setSelectedPlanId(item.id)}
                onSelect={() => handleSelectPlan(item.id)}
              />
            )}
          />
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
        {/* <RatingsCard /> */}
      </ScrollView>

      {/* Sticky Footer Buttons */}
      <View style={styles.footer}>
        <ButtonCompt
          title="Start 7-Day Free Trial"
          style={styles.trialButton}
          textStyle={{color: Colors.black}}
          onPress={() => navigation.navigate(ROUTE_NAMES.BOTTOMTABS)}
        />
        <ButtonCompt
          title="I've Already Purchased"
          style={styles.purchasedButton}
          textStyle={styles.purchasedButtonText}
          onPress={() => navigation.navigate(ROUTE_NAMES.ALREADY_ACCOUNT)}
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

export default PackageScreen;
