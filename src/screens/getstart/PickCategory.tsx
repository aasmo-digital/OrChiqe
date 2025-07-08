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

import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import {useDispatch} from 'react-redux';
import {addLikedCategory} from '../../redux/slices/onboardingSlice'; // Adjust path if needed
import {Colors, FontFamily} from '../../constants';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';
import CategoryCard from './CategoryCard';

// Let's add more categories and real images for a better demo
const CATEGORIES = [
  {
    id: 'science',
    name: 'Science',
    icon: '🧪',
    color: '#4CAF50',
    videos: [
      {id: 1, uri: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      {id: 2, uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
      {
        id: 3,
        uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      },
      {id: 4, uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
    ],
  },
  {
    id: 'art',
    name: 'Art',
    icon: '🎨',
    color: '#FF9800',
    videos: [
      {id: 1, uri: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      {id: 2, uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
      {
        id: 3,
        uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      },
      {id: 4, uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
    ],
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    color: '#9C27B0',
    videos: [
      {id: 1, uri: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      {id: 2, uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
      {
        id: 3,
        uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      },
      {id: 4, uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
    ],
  },
  {
    id: 'animals',
    name: 'Animals',
    icon: '🐾',
    color: '#2196F3',
    videos: [
      {id: 1, uri: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      {id: 2, uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
      {
        id: 3,
        uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      },
      {id: 4, uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
    ],
  },
  {
    id: 'history',
    name: 'History',
    icon: '🏛️',
    color: '#795548',
    videos: [
      {id: 1, uri: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      {id: 2, uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
      {
        id: 3,
        uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      },
      {id: 4, uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
    ],
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    icon: '🧙',
    color: '#673AB7',
    videos: [
      {id: 1, uri: 'https://www.w3schools.com/html/mov_bbb.mp4'},
      {id: 2, uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
      {
        id: 3,
        uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      },
      {id: 4, uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
    ],
  },
];

// 1. Changed props from {navigation} to {onNext}
const PickCategory = ({onNext}) => {
  const swiperRef = useRef(null); // for DeckSwiper
  const [currentIndex, setCurrentIndex] = useState(0); // track current inde
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{borderWidth: 1, flex: 1}}>
          <Video
            source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} // remote MP4 URL
            style={{height: '100%', width: '50%'}}
            // controls={true} // adds play/pause buttons
            resizeMode="cover"
            // paused={false} // auto-play
            muted={true} // ✅ Audio band
          />
        </View>

        <View style={{borderWidth: 1, flex: 1}}>
          <Video
            source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} // remote MP4 URL
            style={{height: '100%', width: '50%'}}
            // controls={true} // adds play/pause buttons
            resizeMode="cover"
            // paused={false} // auto-play
            muted={true} // ✅ Audio band
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={{borderWidth: 1, flex: 1}}>
          <Video
            source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} // remote MP4 URL
            style={{height: '100%', width: '50%'}}
            // controls={true} // adds play/pause buttons
            resizeMode="cover"
            // paused={false} // auto-play
            muted={true} // ✅ Audio band
          />
        </View>
        <View style={{borderWidth: 1, flex: 1}}>
          <Video
            source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} // remote MP4 URL
            style={{height: '100%', width: '50%'}}
            // controls={true} // adds play/pause buttons
            resizeMode="cover"
            // paused={false} // auto-play
            muted={true} // ✅ Audio band
          />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: Colors.white,
          position: 'absolute',
          flexDirection: 'row',
          borderRadius: 100,
          alignItems: 'center',
        }}>
        <Text style={styles.cardIcon}>{card.icon}</Text>
        <Text style={styles.cardTitle}>{card.name}</Text>
      </View>
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
          ref={swiperRef} // ✅ attach ref
          cards={CATEGORIES}
          // renderCard={card => <Card card={card} />}
          renderCard={(card, cardIndex) => (
            // ✅ Pass the `isActive` prop
            <CategoryCard card={card} isActive={cardIndex === currentIndex} />
          )}
          // onSwipedRight={handleSwipedRight}
          onSwipedAll={handleAllSwiped}
          onSwipedRight={cardIndex => {
            handleSwipedRight(cardIndex);
            setCurrentIndex(cardIndex + 1);
          }}
          onSwipedLeft={cardIndex => {
            console.log('Disliked');
            setCurrentIndex(cardIndex + 1);
          }}
          // onSwipedLeft={() => console.log('Disliked')}
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeLeft()}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: Colors.error,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <MaterialCommunityIcon name="close" size={24} color={Colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swiperRef.current.swipeRight()}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: Colors.success,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <MaterialCommunityIcon name="heart" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.swipeText}>
          Swipe right for <Text style={{color: Colors.success}}> YES</Text> ,
          left for
          <Text style={{color: Colors.error}}> NO</Text>
        </Text>
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
    fontSize: 20,
  },
  cardTitle: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 16,
    color: Colors.black,

    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
    marginLeft: 10,
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
