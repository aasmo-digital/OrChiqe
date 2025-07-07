// import React from 'react';
// import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
// import DeckSwiper from 'react-native-deck-swiper';
// // import { useOnboardingStore } from '../../../store/onboardingStore';
// import {ROUTE_NAMES} from '../../constants/routes';
// import {Colors, FontFamily} from '../../constants';

// // Mock data for categories
// const CATEGORIES = [
//   {
//     id: 'science',
//     name: 'Science',
//     icon: '🧪',
//     images: [
//       /* image paths */
//     ],
//   },
//   {
//     id: 'art',
//     name: 'Art',
//     icon: '🎨',
//     images: [
//       /* image paths */
//     ],
//   },
//   {
//     id: 'music',
//     name: 'Music',
//     icon: '🎵',
//     images: [
//       /* image paths */
//     ],
//   },
// ];

// const PickCategory = ({navigation}: any) => {
//   //   const {addLikedCategory} = useOnboardingStore();

//   const handleSwipedRight = cardIndex => {
//     // addLikedCategory(CATEGORIES[cardIndex].id);
//   };

//   const handleAllSwiped = () => {
//     // navigation.navigate(ROUTE_NAMES.RECOMMENDATION_PREF);
//   };

//   const Card = ({card}) => (
//     <View style={styles.card}>
//       {/* For simplicity, we'll just show the name. You would build a 2x2 image grid here. */}
//       <Text style={styles.cardTitle}>
//         {card.icon} {card.name}
//       </Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           Pick categories that you and your kid(s) enjoy the most:
//         </Text>
//       </View>
//       <DeckSwiper
//         cards={CATEGORIES}
//         renderCard={card => <Card card={card} />}
//         onSwipedRight={handleSwipedRight}
//         onSwipedAll={handleAllSwiped}
//         cardIndex={0}
//         backgroundColor={Colors.white}
//         stackSize={3}
//         infinite={false}
//         animateCardOpacity
//       />
//       <View style={styles.footer}>
//         <Text style={styles.swipeText}>
//           Swipe right for <Text style={{color: 'green'}}>yes</Text>, left for{' '}
//           <Text style={{color: 'red'}}>no</Text>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default PickCategory;

// src/features/onboarding/screens/PickCategory.js

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import {useDispatch} from 'react-redux';
import {addLikedCategory} from '../../redux/slices/onboardingSlice'; // Adjust path if needed
import {Colors, FontFamily} from '../../constants';

// Let's add more categories and real images for a better demo
const CATEGORIES = [
  {id: 'science', name: 'Science', icon: '🧪', color: '#4CAF50'},
  {id: 'art', name: 'Art', icon: '🎨', color: '#FF9800'},
  {id: 'music', name: 'Music', icon: '🎵', color: '#9C27B0'},
  {id: 'animals', name: 'Animals', icon: '🐾', color: '#2196F3'},
  {id: 'history', name: 'History', icon: '🏛️', color: '#795548'},
  {id: 'fantasy', name: 'Fantasy', icon: '🧙', color: '#673AB7'},
];

// 1. Changed props from {navigation} to {onNext}
const PickCategory = ({onNext}) => {
  const dispatch = useDispatch();

  // 2. This function now dispatches the liked category to the Redux store.
  const handleSwipedRight = cardIndex => {
    const likedCategoryId = CATEGORIES[cardIndex].id;
    console.log('Liked:', likedCategoryId);
    dispatch(addLikedCategory(likedCategoryId));
  };

  // 3. This function now tells the parent component to move to the next step.
  const handleAllSwiped = () => {
    console.log('All categories swiped!');
    onNext();
  };

  // The Card component is for rendering a single item in the deck.
  const Card = ({card}) => (
    <View style={[styles.card, {backgroundColor: card.color}]}>
      <Text style={styles.cardIcon}>{card.icon}</Text>
      <Text style={styles.cardTitle}>{card.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Pick categories that you and your kid(s) enjoy the most:
        </Text>
      </View>
      <View style={styles.swiperContainer}>
        <DeckSwiper
          cards={CATEGORIES}
          renderCard={card => <Card card={card} />}
          onSwipedRight={handleSwipedRight}
          onSwipedAll={handleAllSwiped}
          onSwipedLeft={() => console.log('Disliked')}
          cardIndex={0}
          backgroundColor={'transparent'} // Use transparent background to show the gradient
          stackSize={3}
          infinite={false}
          animateCardOpacity
          cardVerticalMargin={20}
          // Custom styling for the card stack
          containerStyle={{
            height: '100%',
          }}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.swipeText}>Swipe right for YES, left for NO</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: FontFamily.Bold,
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 30,
  },
  swiperContainer: {
    flex: 1, // This makes the swiper take up the available space
    marginTop: 20,
  },
  card: {
    flex: 0.8, // Adjust the height of the card
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  cardIcon: {
    fontSize: 80,
  },
  cardTitle: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 32,
    color: Colors.white,
    marginTop: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  swipeText: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default PickCategory;

// Styles (See full styles at the end)
// const styles = StyleSheet.create({
//   container: {flex: 1, padding: 20},
//   header: {alignItems: 'center', marginVertical: 20},
//   title: {
//     fontFamily: FontFamily.Bold,
//     fontSize: 22,
//     color: Colors.grayDark,
//     textAlign: 'center',
//   },
//   card: {
//     flex: 0.7,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.grayVeryLight,
//     borderWidth: 1,
//     borderColor: Colors.grayLight,
//   },
//   cardTitle: {fontFamily: FontFamily.Bold, fontSize: 32},
//   footer: {position: 'absolute', bottom: 50, alignSelf: 'center'},
//   swipeText: {
//     fontFamily: FontFamily.SemiBold,
//     fontSize: 16,
//     color: Colors.grayMedium,
//   },
// });
