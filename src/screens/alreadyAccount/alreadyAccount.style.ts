import {Platform, StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 40 : 20,
    right: 20,
    backgroundColor: Colors.black, // Dark teal from your design
    borderRadius: 18,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 26,
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 55,
    borderColor: Colors.black,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: FontFamily.Regular,
    color: Colors.black,
    marginBottom: 20,
  },
  loginButton: {
    // This style is for the enabled button, using your reusable Button component
    backgroundColor: Colors.black,
  },
  disabledButton: {
    // This style overrides the default when the button is disabled
    backgroundColor: '#E9E9E9', // The light gray from your design
    elevation: 0, // Remove shadow on disabled button for Android
    shadowOpacity: 0, // Remove shadow on disabled button for iOS
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 10,
    fontFamily: FontFamily.Regular,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
});

export default styles;
