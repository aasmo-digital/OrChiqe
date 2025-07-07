import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../constants';

// --- Styles ---
const styles = StyleSheet.create({
  gradient: {flex: 1},
  container: {
    flex: 1,
    // backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  // Star Decorations
  star: {
    position: 'absolute',
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  star1: {top: '10%', right: '15%'},
  star2: {top: '15%', left: '10%'},
  star3: {top: '20%', right: '25%'},

  // Text Section
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 32,
    color: Colors.black,
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: FontFamily.Regular,
    fontSize: 16,
    color: Colors.grayDark,
    textAlign: 'center',
    lineHeight: 24,
  },

  // Button Section
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#F5A623', // Your Orange color
  },
  existingAccountButton: {
    backgroundColor: Colors.primary, // Your Blue color
  },
  orText: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 14,
    color: Colors.grayLight,
    marginVertical: 16,
  },

  // Illustration Section
  illustrationContainer: {
    height: 100, // Give the container a fixed height
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  illustrationItem: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  illustrationImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default styles;
