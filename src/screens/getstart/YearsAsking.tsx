// import {
//   Alert,
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import {ButtonCompt} from '../../components';
// import {Colors, FontFamily} from '../../constants';
// import { useDispatch, useSelector } from 'react-redux';

// const AGE_RANGES = [
//   {id: '1', text: '3-4 y.o'},
//   {id: '2', text: '5-6 y.o'},
//   {id: '3', text: '7-8 y.o'},
//   {id: '4', text: '9-10 y.o'},
//   {id: '5', text: '11-12 y.o'},
// ];

// const YearsAsking = ({selected, handleSelect}:any) => {

//     // useDispatch is how you call actions to change state
//   const dispatch = useDispatch();

//     // useSelector is how you read data from the state
//   const currentSelectedAges = useSelector((state) => state.onboarding.selectedAges);

//   const handleNext = () => {
//     const newAges = ['3-4 y.o', '5-6 y.o']; // Example data

//     // "Dispatch" the action with the new data as the payload
//     dispatch(setSelectedAges(newAges));

//     // ... navigate to next screen
//   };

//   const renderItem = ({item}: any) => {
//     const isSelected = selected.includes(item.id);
//     return (
//       <TouchableOpacity
//         style={[styles.item, isSelected && styles.itemSelected]}
//         onPress={() => handleSelect(item.id)}>
//         <Text style={[styles.itemText, isSelected && styles.itemTextSelected]}>
//           {item.text}
//         </Text>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <View style={{flex: 1}}>
//       <View style={styles.header}>
//         <Text style={styles.title}>How Old Are Your Kid(s)?</Text>
//         <Text style={styles.subtitle}>Select All That Apply</Text>
//       </View>

//       <FlatList
//         data={AGE_RANGES}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.list}
//       />

//       <View style={styles.footer}>
//         <ButtonCompt
//           title="Next"
//           // onPress={handleNext}
//           onPress={() => Alert.alert('-------')}
//           // disabled={selected.length === 0}
//           style={[
//             styles.nextButton,
//             selected.length === 0 && styles.disabledButton,
//           ]}
//         />
//       </View>
//     </View>
//   );
// };

// export default YearsAsking;

// const styles = StyleSheet.create({
//   header: {alignItems: 'center', marginVertical: 40},
//   title: {fontFamily: FontFamily.Bold, fontSize: 24, color: Colors.white},
//   subtitle: {
//     fontFamily: FontFamily.Regular,
//     fontSize: 16,
//     color: Colors.white,
//     marginTop: 8,
//   },
//   list: {flexGrow: 1},
//   item: {
//     backgroundColor: Colors.grayVeryLight,
//     borderRadius: 12,
//     padding: 18,
//     marginBottom: 15,
//   },
//   itemSelected: {
//     backgroundColor: '#e0f7fa',
//     borderColor: '#00796b',
//     borderWidth: 2,
//   },
//   itemText: {
//     fontFamily: FontFamily.Bold,
//     fontSize: 20,
//     color: Colors.grayDark,
//   },
//   itemTextSelected: {color: '#004d40'},
//   footer: {paddingBottom: 20},
//   nextButton: {backgroundColor: '#f9a825'}, // Yellowish color
//   disabledButton: {backgroundColor: Colors.grayLight},
// });

// src/features/onboarding/screens/YearsAsking.js

import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedAges} from '../../redux/slices/onboardingSlice'; // Make sure the path is correct
import {ButtonCompt} from '../../components';
import {Colors, FontFamily} from '../../constants';

const AGE_RANGES = [
  {id: '1', text: '3-4 y.o'},
  {id: '2', text: '5-6 y.o'},
  {id: '3', text: '7-8 y.o'},
  {id: '4', text: '9-10 y.o'},
  {id: '5', text: '11-12 y.o'},
];

// 1. REMOVED `selected` and `handleSelect` from props. ADDED `onNext`.
const YearsAsking = ({onNext}) => {
  const dispatch = useDispatch();

  // 2. GET the state directly from Redux. This is the single source of truth.
  const selectedAges = useSelector(state => state.onboarding.selectedAges);

  // 3. This function now updates the REDUX state directly.
  const handleSelect = ageText => {
    // Create a new array based on the current Redux state
    const newSelectedAges = selectedAges.includes(ageText)
      ? selectedAges.filter(age => age !== ageText)
      : [...selectedAges, ageText];

    // Dispatch the action to update the global Redux store
    dispatch(setSelectedAges(newSelectedAges));
  };

  // 4. This function validates and then calls the parent's `onNext` function.
  const handleNextPress = () => {
    if (selectedAges.length === 0) {
      Alert.alert(
        'Selection Required',
        'Please select at least one age range.',
      );
      return;
    }
    // Tell the parent component to move to the next step
    onNext();
  };

  const renderItem = ({item}) => {
    // Check against the `selectedAges` from Redux
    const isSelected = selectedAges.includes(item.text);
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.itemSelected]}
        onPress={() => handleSelect(item.text)} // Pass the text to be stored
      >
        <Text style={[styles.itemText, isSelected && styles.itemTextSelected]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, padding: 15}}>
      <View style={styles.header}>
        <Text style={styles.title}>How Old Are Your Kid(s)?</Text>
        <Text style={styles.subtitle}>Select All That Apply</Text>
      </View>

      <FlatList
        data={AGE_RANGES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />

      <View style={styles.footer}>
        <ButtonCompt
          title="Next"
          onPress={handleNextPress} // Call our new handler
          disabled={selectedAges.length === 0}
          style={[
            styles.nextButton,
            selectedAges.length === 0 && styles.disabledButton,
          ]}
          textStyle={{
            color: selectedAges.length === 0 ? Colors.white : Colors.black,
          }}
        />
      </View>
    </View>
  );
};

export default YearsAsking;

// Make sure you have styles for this component
const styles = StyleSheet.create({
  header: {alignItems: 'center', marginVertical: 40},
  title: {fontFamily: FontFamily.Bold, fontSize: 24, color: Colors.white},
  subtitle: {
    fontFamily: FontFamily.Regular,
    fontSize: 16,
    color: '#eee',
    marginTop: 8,
  },
  list: {flexGrow: 1},
  item: {
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  itemSelected: {backgroundColor: Colors.white},
  itemText: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 18,
    color: Colors.white,
  },
  itemTextSelected: {color: Colors.primary},
  footer: {paddingBottom: 20},
  nextButton: {backgroundColor: Colors.white},
  disabledButton: {backgroundColor: 'rgba(255,255,255,0.5)'},
});
