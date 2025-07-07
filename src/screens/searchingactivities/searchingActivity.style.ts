import { StyleSheet } from 'react-native'
import { Colors, FontFamily } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F8', // A light off-white/gray background
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  starImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 28,
    color: '#004D40', // A dark teal color
    marginBottom: 30,
  },
  stepsWrapper: {
    alignItems: 'flex-start',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00796B', // A medium teal
    marginRight: 12,
  },
  checkboxCompleted: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50', // Green for completed
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  stepText: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 18,
    color: Colors.grayDark,
  },
  bottomCard: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    // Shadow for iOS and Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  cardImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  cardQuestion: {
    fontFamily: FontFamily.Bold,
    fontSize: 18,
    color: Colors.grayDark,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  choiceButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noButton: {
    backgroundColor: '#FF6B6B', // Pink/Red
    marginRight: 10,
  },
  yesButton: {
    backgroundColor: '#81C784', // Light Green
    marginLeft: 10,
  },
  choiceButtonText: {
    fontFamily: FontFamily.Bold,
    fontSize: 16,
    color: Colors.white,
  },
});

export default styles