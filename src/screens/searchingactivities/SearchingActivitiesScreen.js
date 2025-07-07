// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// // State Management
// // import { useOnboardingStore } from '../../../store/onboardingStore';

//  import {Colors, FontFamily} from '../../constants';
// import { StatusbarCompt } from '../../components';
// import styles from './searchingActivity.style';
// import { ROUTE_NAMES } from '../../constants/routes';

// // Assets
// const happyStar = 'https://img.icons8.com/plasticine/200/smiling-star.png';
// const carCommute = 'https://img.icons8.com/plasticine/200/suv.png';

// // A small local component to avoid repeating the loading step UI
// const LoadingStep = ({text, isCompleted}) => {
//   return (
//     <View style={styles.stepContainer}>
//       <View style={isCompleted ? styles.checkboxCompleted : styles.checkbox}>
//         {isCompleted && <Text style={styles.checkIcon}>✓</Text>}
//       </View>
//       <Text style={styles.stepText}>{text}</Text>
//     </View>
//   );
// };

// const SearchingActivitiesScreen = ({navigation}) => {
//   const [currentStep, setCurrentStep] = useState(1);
//   // const { setCommutePreference } = useOnboardingStore();

//   useEffect(() => {
//     // Animate the loading steps
//     const step2Timer = setTimeout(() => {
//       setCurrentStep(2);
//     }, 1500); // Move to step 2 after 1.5s

//     // Auto-navigate after a total delay if the user doesn't choose an option
//     const finalNavigationTimer = setTimeout(() => {
//       handleNavigation(false); // Default to not adding commute activities
//     }, 4000); // Navigate after 4s

//     // Cleanup timers when the component unmounts to prevent memory leaks
//     return () => {
//       clearTimeout(step2Timer);
//       clearTimeout(finalNavigationTimer);
//     };
//   }, []);

//   const handleNavigation = (wantsCommute) => {
//     setCommutePreference(wantsCommute);
//     // Navigate to the main app, replacing the entire onboarding stack
//     navigation.reset({
//       index: 0,
//       routes: [{ name: ROUTE_NAMES.HOME }], // Assuming HOME is your main screen
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusbarCompt translucent={true}  backgroundColor={Colors.transparent}/>
//       {/* Top Section */}
//       <View style={styles.topSection}>
//         <Image source={{uri: happyStar}} style={styles.starImage} />
//         <Text style={styles.title}>Searching Activities</Text>

//         <View style={styles.stepsWrapper}>
//           <LoadingStep
//             text="Analysing your answers 🔎"
//             isCompleted={currentStep >= 1}
//           />
//           <LoadingStep
//             text="Creating recommendations ❤️"
//             isCompleted={currentStep >= 2}
//           />
//         </View>
//       </View>

//       {/* Bottom Card Section */}
//       <View style={styles.bottomCard}>
//         <Image source={{uri: carCommute}} style={styles.cardImage} />
//         <Text style={styles.cardQuestion}>
//           Would you like to add activities for commute?
//         </Text>
//         {/* <View style={styles.buttonRow}>
//           <TouchableOpacity
//             style={[styles.choiceButton, styles.noButton]}
//             onPress={() => handleNavigation(false)}
//           >
//             <Text style={styles.choiceButtonText}>No 👎</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.choiceButton, styles.yesButton]}
//             onPress={() => handleNavigation(true)}
//           >
//             <Text style={styles.choiceButtonText}>Yes 👍</Text>
//           </TouchableOpacity>
//         </View> */}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SearchingActivitiesScreen;

import React, {useState, useEffect, useRef} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

// 1. Import Redux hooks and the new action
import {useDispatch} from 'react-redux';
import {setWantsCommuteActivities} from '../../redux/slices/onboardingSlice';

import {Colors, FontFamily} from '../../constants';
import {StatusbarCompt} from '../../components';
import styles from './searchingActivity.style';
import {ROUTE_NAMES} from '../../constants/routes';

// Assets
const happyStar = 'https://img.icons8.com/plasticine/200/smiling-star.png';
const carCommute = 'https://img.icons8.com/plasticine/200/suv.png';

const LoadingStep = ({text, isCompleted}) => {
  return (
    <View style={styles.stepContainer}>
      <View style={isCompleted ? styles.checkboxCompleted : styles.checkbox}>
        {isCompleted && <Text style={styles.checkIcon}>✓</Text>}
      </View>
      <Text style={styles.stepText}>{text}</Text>
    </View>
  );
};

const SearchingActivitiesScreen = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(1);

  // 2. Use a ref to hold timer IDs so we can clear them from anywhere
  const timerRef = useRef({step2: null, final: null});

  // 3. Instantiate dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    // 4. Update useEffect to use the ref
    timerRef.current.step2 = setTimeout(() => {
      setCurrentStep(2);
    }, 1500);

    timerRef.current.final = setTimeout(() => {
      handleNavigation(false); // Default to not adding commute activities
    }, 4000);

    // This cleanup function will run when the component unmounts
    return () => {
      clearTimeout(timerRef.current.step2);
      clearTimeout(timerRef.current.final);
    };
  }, []); // Empty dependency array ensures this runs only once

  // 5. Update the handleNavigation function to use Redux
  const handleNavigation = wantsCommute => {
    // Manually clear timers to prevent race conditions if user is faster than the timer
    clearTimeout(timerRef.current.step2);
    clearTimeout(timerRef.current.final);

    // Dispatch the user's choice to the Redux store
    dispatch(setWantsCommuteActivities(wantsCommute));

    // Navigate to the screen that shows the results
    navigation.reset({
      index: 0,
      routes: [{name: ROUTE_NAMES.ACTIVITIES_READY}],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusbarCompt translucent={true} backgroundColor={Colors.transparent} />
      <View style={styles.topSection}>
        <Image source={{uri: happyStar}} style={styles.starImage} />
        <Text style={styles.title}>Searching Activities</Text>

        <View style={styles.stepsWrapper}>
          <LoadingStep
            text="Analysing your answers 🔎"
            isCompleted={currentStep >= 1}
          />
          <LoadingStep
            text="Creating recommendations ❤️"
            isCompleted={currentStep >= 2}
          />
        </View>
      </View>

      <View style={styles.bottomCard}>
        <Image source={{uri: carCommute}} style={styles.cardImage} />
        <Text style={styles.cardQuestion}>
          Would you like to add activities for commute?
        </Text>

        {/* 6. Re-enable the UI buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.choiceButton, styles.noButton]}
            onPress={() => handleNavigation(false)}>
            <Text style={styles.choiceButtonText}>No 👎</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.choiceButton, styles.yesButton]}
            onPress={() => handleNavigation(true)}>
            <Text style={styles.choiceButtonText}>Yes 👍</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchingActivitiesScreen;
