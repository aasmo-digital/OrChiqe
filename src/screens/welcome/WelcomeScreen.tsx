import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';

// Reusable Components
import {Colors, FontFamily} from '../../constants';
import {ROUTE_NAMES} from '../../constants/routes';
import {
  AutoScrollingIllustrations,
  ButtonCompt,
  OrCompt,
} from '../../components';
import styles from './welcome.style';
import LinearGradient from 'react-native-linear-gradient';
import {illustrations} from './consts';

// Constants

// Get screen width for dynamic sizing
const {width} = Dimensions.get('window');

// --- Mock Data for Illustrations ---
// Replace with your actual image files

const WelcomeScreen = ({navigation}: any) => {
  // Functions to handle button presses

  const handleGetStarted = () => {
    navigation.navigate(ROUTE_NAMES.GETSTART);
  };

  const handleUseExisting = () => {
    navigation.navigate(ROUTE_NAMES.ALREADY_ACCOUNT);

    console.log('Use Existing Account Pressed');
  };

  // --- Render Function for the FlatList ---
  const renderIllustration = ({item}: any) => (
    <View style={styles.illustrationItem}>
      <Image source={item.imageUrl} style={styles.illustrationImage} />
    </View>
  );

  const starYellowUrl =
    'https://cdn-icons-png.flaticon.com/512/1828/1828884.png';
  const dotPinkUrl = 'https://cdn-icons-png.flaticon.com/512/1359/1359345.png';
  const dotBlueUrl = 'https://cdn-icons-png.flaticon.com/512/5906/5906164.png';

  const Colors = {
    primary: '#0f52ba',
    accentYellow: '#B9E5FF',
    accentOrange: '#289FFF',
  };

  // useEffect(() => {
  //   if (Platform.OS === 'android') changeNavigationBarColor('#5c0984', true); // Make Android bottom nav purple
  // }, []);

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.accentYellow, Colors.accentOrange]}
      style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={'transparent'}
        />

        {/* Background Decorations (Stars) */}
        <Image
          source={{uri: starYellowUrl}}
          style={[styles.star, styles.star1]}
        />
        <Image source={{uri: dotPinkUrl}} style={[styles.star, styles.star2]} />
        <Image source={{uri: dotBlueUrl}} style={[styles.star, styles.star3]} />

        {/* 
        NOTE: The Wavy background would be an SVG placed here with absolute positioning
        <SvgXml xml={backgroundWaveSVG} width="100%" height="100%" style={StyleSheet.absoluteFillObject} />
      */}

        {/* Main Content */}
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to Hearty!</Text>
            <Text style={styles.subtitle}>
              Start your journey with us or log in to your existing account to
              continue.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <ButtonCompt
              title="Get Started"
              onPress={handleGetStarted}
              style={styles.getStartedButton}
            />
            <OrCompt />
            <ButtonCompt
              title="Use Existing Account"
              onPress={handleUseExisting}
              style={styles.existingAccountButton}
            />
          </View>
        </View>

        {/* Bottom Illustrations */}
        {/* <View style={[styles.illustrationContainer, {bottom: 100}]}>
          <FlatList
            data={illustrations}
            renderItem={renderIllustration}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}
          />
        </View> */}

        {/* Bottom Illustrations */}
        {/* <View style={styles.illustrationContainer}>
          <FlatList
            data={illustrations}
            renderItem={renderIllustration}
            keyExtractor={item => item.id}
            horizontal
             showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}
          />
        </View> */}

        <AutoScrollingIllustrations
          illustrations={illustrations}
          renderIllustration={renderIllustration}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default WelcomeScreen;
