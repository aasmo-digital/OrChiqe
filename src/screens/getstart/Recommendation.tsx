// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// // import {useOnboardingStore} from '../../../store/onboardingStore';
// import {Colors, FontFamily} from '../../constants';
// import {ButtonCompt} from '../../components';
// import {ROUTE_NAMES} from '../../constants/routes';

// const PREFERENCES = [
//   {id: 'liked', text: 'based on what I liked', icon: '❤️'},
//   {id: 'new', text: 'something different / new', icon: '💡'},
// ];

// const Recommendation = ({navigation}: any) => {
//   const [selected, setSelected] = useState(null);
//   //   const {setRecommendationPreference, selectedAges, likedCategories} =
//   //     useOnboardingStore();

//   //   const handleNext = () => {
//   //     setRecommendationPreference(selected);

//   //     // Here you would send all the data to your backend API
//   //     console.log('Onboarding Complete!');
//   //     console.log('Ages:', selectedAges);
//   //     console.log('Categories:', likedCategories);
//   //     console.log('Preference:', selected);

//   //     // Navigate to the main part of the app, replacing the onboarding stack
//   //     navigation.reset({
//   //       index: 0,
//   //       routes: [{name: ROUTE_NAMES.HOME}],
//   //     });
//   //   };

//   // Same renderItem and styles as AgeSelectionScreen, just add the icon
//   const renderItem = ({item}) => {
//     const isSelected = selected === item.id;
//     return (
//       <TouchableOpacity
//         style={[styles.item, isSelected && styles.itemSelected]}
//         onPress={() => setSelected(item.id)}>
//         <Text style={[styles.itemText, isSelected && styles.itemTextSelected]}>
//           {item.icon} {item.text}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           Which recommendations would you like to see?
//         </Text>
//       </View>
//       <FlatList
//         data={PREFERENCES}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//       <View style={styles.footer}>
//         <ButtonCompt
//           title="Next"
//           //   onPress={handleNext}
//           //   disabled={!selected}
//           style={[styles.nextButton, !selected && styles.disabledButton]}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };
// // Use the same styles as AgeSelectionScreen
// const styles = StyleSheet.create({
//   container: {flex: 1, padding: 20},
//   header: {alignItems: 'center', marginVertical: 40},
//   title: {fontFamily: FontFamily.Bold, fontSize: 24, color: Colors.white},
//   subtitle: {
//     fontFamily: FontFamily.Regular,
//     fontSize: 16,
//     color: Colors.grayMedium,
//     marginTop: 8,
//   },
//   list: {flexGrow: 1},
//   item: {
//     backgroundColor: Colors.grayVeryLight,
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 15,
//   },
//   itemSelected: {
//     backgroundColor: '#e0f7fa',
//     borderColor: '#00796b',
//     borderWidth: 2,
//   },
//   itemText: {
//     fontFamily: FontFamily.SemiBold,
//     fontSize: 18,
//     color: Colors.grayDark,
//     textTransform: 'capitalize',
//   },
//   itemTextSelected: {color: '#004d40'},
//   footer: {paddingBottom: 20},
//   nextButton: {backgroundColor: '#f9a825'},
//   disabledButton: {backgroundColor: Colors.grayLight},
// });

// export default Recommendation;

// src/features/onboarding/screens/Recommendation.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setRecommendationPreference} from '../../redux/slices/onboardingSlice'; // Adjust path
import {ButtonCompt} from '../../components';
import {Colors, FontFamily} from '../../constants';

const PREFERENCES = [
  {id: 'liked', text: 'based on what I liked', icon: '❤️'},
  {id: 'new', text: 'something different / new', icon: '💡'},
];

// 1. Changed props from {navigation} to {onNext}
const Recommendation = ({onNext}) => {
  const dispatch = useDispatch();

  // 2. Get the current selected preference directly from the Redux store.
  const recommendationPreference = useSelector(
    state => state.onboarding.recommendationPreference,
  );

  // 3. This handler now dispatches the selected ID to the Redux store.
  const handleSelect = preferenceId => {
    dispatch(setRecommendationPreference(preferenceId));
  };

  // 4. This handler validates and then calls the parent's `onNext` function.
  const handleNextPress = () => {
    if (!recommendationPreference) {
      Alert.alert('Selection Required', 'Please choose a recommendation type.');
      return;
    }
    // Tell the parent component to finish the flow.
    onNext();
  };

  const renderItem = ({item}) => {
    // 5. Compare against the `recommendationPreference` from Redux.
    const isSelected = recommendationPreference === item.id;
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.itemSelected]}
        onPress={() => handleSelect(item.id)}>
        <Text style={[styles.itemText, isSelected && styles.itemTextSelected]}>
          {item.icon} {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Which recommendations would you like to see?
        </Text>
      </View>
      <FlatList
        data={PREFERENCES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 20}}
      />
      <View style={styles.footer}>
        <ButtonCompt
          title="Finish" // Changed text to "Finish" for the last step
          onPress={handleNextPress}
          disabled={!recommendationPreference}
          style={[
            styles.nextButton,
            !recommendationPreference && styles.disabledButton,
          ]}
          textStyle={{
            color: !recommendationPreference ? Colors.white : Colors.black,
          }}
        />
      </View>
    </View>
  );
};

// Adjusted styles to fit the dark gradient background
const styles = StyleSheet.create({
  container: {flex: 1},
  header: {alignItems: 'center', marginVertical: 40, paddingHorizontal: 20},
  title: {
    fontFamily: FontFamily.Bold,
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  itemSelected: {
    backgroundColor: Colors.white,
    borderColor: '#dcca06', // Use the yellow accent color for the border
    borderWidth: 2,
  },
  itemText: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 18,
    color: Colors.white,
    textTransform: 'capitalize',
  },
  itemTextSelected: {color: Colors.primary}, // Use the purple color for selected text
  footer: {padding: 20},
  nextButton: {backgroundColor: Colors.white},
  disabledButton: {backgroundColor: 'rgba(255,255,255,0.5)'},
});

export default Recommendation;
