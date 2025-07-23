import React, {useEffect} from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';

// Import your constants
import {ROUTE_NAMES} from '../../constants/routes';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const logoUrl = 'https://img.icons8.com/plasticine/200/heart-with-pulse.png'; // Example for "Hearty" app

const SplashScreen = ({navigation}: any) => {
  // This effect runs once when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      // After 2.5 seconds, replace the splash screen with the Welcome screen
      // 'replace' is used so the user can't press the back button to go back to the splash screen
      navigation.replace(ROUTE_NAMES.WELCOME);
    }, 2500); // 2500 milliseconds = 2.5 seconds

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  const Colors = {
    primary: '#0f52ba',
    accentYellow: '#B9E5FF',
    accentOrange: '#289FFF',
  };

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.accentYellow, Colors.accentOrange]}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
        {/* Set the status bar to be visible and styled for our screen */}
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor={'transparent'}
        />

        {/* Your logo */}
        <Animatable.Image
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          source={{uri: logoUrl}}
          style={styles.logo}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Center the content both horizontally and vertically
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.primary, // Use a clean white background
  },
  logo: {
    width: 200,
    height: 200,
    // Ensures the logo scales correctly without being stretched or cropped
    resizeMode: 'contain',
  },
});

export default SplashScreen;
