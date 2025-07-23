// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   Alert,
//   Animated,
// } from 'react-native';
// // import {useOnboardingStore} from '../../../store/onboardingStore';

// import LinearGradient from 'react-native-linear-gradient';
// import YearsAsking from './YearsAsking';
// import PickCategory from './PickCategory';
// import Recommendation from './Recommendation';

// const GetStart = ({navigation}: any) => {
//   const [selected, setSelected] = useState([]);
//   const [selectedAges, setSelectedAges] = useState<string[]>([]);
//   const [selectedStep, setSelectedStep] = useState(0);

//   const stepProgress = useRef([
//     new Animated.Value(0),
//     new Animated.Value(0),
//     new Animated.Value(0),
//   ]).current;

//   useEffect(() => {
//     for (let i = 0; i <= selectedStep; i++) {
//       Animated.timing(stepProgress[i], {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: false,
//       }).start();
//     }
//   }, [selectedStep]);

//   // const {setSelectedAges} = useOnboardingStore();

//   // const handleSelect = id => {
//   //   if (selected.includes(id)) {
//   //     setSelected(selected.filter(item => item !== id));
//   //   } else {
//   //     setSelected([...selected, id]);
//   //   }
//   // };

//   // const handleNext = () => {
//   //   setSelectedAges(selected);
//   //   navigation.navigate(ROUTE_NAMES.CATEGORY_PICKER);
//   // };

//   const handleSelect = (id: string) => {
//     setSelectedAges(prev =>
//       prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
//     );
//   };

//   const colors = {
//     primary: '#5c0984',
//     accentYellow: '#dcca06',
//     accentOrange: '#5c0984',
//   };
//   return (
//     <LinearGradient
//       colors={[colors.primary, colors.accentYellow, colors.accentOrange]}
//       style={{flex: 1}}
//       start={{x: 0, y: 0}}
//       end={{x: 1, y: 1}}>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.progressContainer}>
//           {[0, 1, 2].map(index => (
//             <View key={index} style={styles.stepBackground}>
//               <Animated.View
//                 style={[
//                   styles.stepFill,
//                   {
//                     width: stepProgress[index].interpolate({
//                       inputRange: [0, 1],
//                       outputRange: ['0%', '100%'],
//                     }),
//                   },
//                 ]}
//               />
//             </View>
//           ))}
//         </View>
//         {selectedStep == 0 ? (
//           <YearsAsking selected={selectedAges} handleSelect={handleSelect} />
//         ) : selectedStep == 2 ? (
//           <PickCategory />
//         ) : (
//           <Recommendation />
//         )}
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// // Styles (See full styles at the end)
// const styles = StyleSheet.create({
//   container: {flex: 1, padding: 20},
//   progressContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     marginTop: 50,
//   },
//   stepBackground: {
//     flex: 1,
//     height: 2,
//     backgroundColor: '#aaa',
//     marginHorizontal: 5,
//     overflow: 'hidden',
//     borderRadius: 1,
//   },
//   stepFill: {
//     height: 2,
//     backgroundColor: '#fff', // white fill
//   },
// });

// export default GetStart;

// src/features/onboarding/screens/GetStart.js

import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Animated, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Import all step components
import YearsAsking from './YearsAsking';
import PickCategory from './PickCategory';
import Recommendation from './Recommendation';
import {ROUTE_NAMES} from '../../constants/routes';
import {useSelector} from 'react-redux';

const GetStart = ({navigation}) => {
  const [selectedStep, setSelectedStep] = useState(0);

  // This progress bar animation logic is fine and can stay as is.
  const stepProgress = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  useEffect(() => {
    Animated.timing(stepProgress[selectedStep], {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [selectedStep]);

  const onboardingData = useSelector(state => state.onboarding);

  // 1. REMOVED all state and handlers related to 'selectedAges'.

  // 2. This function is now the single point of control for moving forward.
  // const handleNextStep = () => {
  //   if (selectedStep < 2) {
  //     setSelectedStep(prev => prev + 1);
  //   } else {
  //     // This is the final step, you can now navigate away
  //     Alert.alert('Onboarding Complete!', 'Navigating to home screen...');
  //     navigation.navigate(ROUTE_NAMES.HOME); // Or wherever you need to go
  //   }
  // };

  // 3. This function now has a special case for the final step.
  const handleNextStep = () => {
    if (selectedStep < 2) {
      setSelectedStep(prev => prev + 1);
    } else {
      // --- THIS IS THE FINAL STEP ---
      // Here you would make your API call to save the user's preferences.
      console.log('ONBOARDING COMPLETE! Sending this data to backend:', {
        ages: onboardingData.selectedAges,
        categories: onboardingData.likedCategories,
        preference: onboardingData.recommendationPreference,
      });

      // Navigate to the main part of the app, replacing the onboarding stack
      // so the user cannot go back.
      navigation.reset({
        index: 0,
        routes: [{name: ROUTE_NAMES.SEARCHING_ACTIVITIES}], // Navigate to the grid screen
      });
    }
  };

  const colors = {
    primary: '#0f52ba',
    accentYellow: '#B9E5FF',
    accentOrange: '#289FFF',
  };

  const renderCurrentStep = () => {
    switch (selectedStep) {
      case 0:
        // 3. PASS the `handleNextStep` function as the `onNext` prop.
        return <YearsAsking onNext={handleNextStep} />;
      case 1:
        // You had step 2 and then other, I'm assuming 0, 1, 2 is the correct order
        return <PickCategory onNext={handleNextStep} />;
      case 2:
        return <Recommendation onNext={handleNextStep} />;
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={[colors.primary, colors.accentYellow, colors.accentOrange]}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.progressContainer}>
          {[0, 1, 2].map(index => (
            <View key={index} style={styles.stepBackground}>
              <Animated.View
                style={[
                  styles.stepFill,
                  {
                    width: stepProgress[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '100%'],
                    }),
                  },
                ]}
              />
            </View>
          ))}
        </View>
        {renderCurrentStep()}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
    marginBottom: 20,
  },
  stepBackground: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  stepFill: {
    height: 4,
    backgroundColor: '#fff',
  },
});

export default GetStart;
