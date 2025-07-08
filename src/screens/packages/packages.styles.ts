import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../constants';

// --- Styles ---
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  heroSection: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  benefits: {flex: 1},
  heroTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: 22,
    color: Colors.white,
    marginBottom: 15,
  },
  heroImage: {width: 150, height: 150, resizeMode: 'contain'},
  benefitItem: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  benefitText: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 16,
    color: Colors.white,
    marginLeft: 10,
  },
  investTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    marginVertical: 20,
  },
  plansContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: 18,
    color: Colors.white,
    margin: 20,
    marginBottom: 10,
  },

  footer: {
    padding: 20,
    // borderTopWidth: 1,
    borderColor: Colors.grayVeryLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  trialButton: {backgroundColor: Colors.accentOrange},
  purchasedButton: {backgroundColor: '#4CAF50', marginVertical: 12},
  purchasedButtonText: {color: 'white'},
  cancelText: {
    textAlign: 'center',
    fontFamily: FontFamily.Regular,
    color: '#666',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerLinkText: {
    fontFamily: FontFamily.SemiBold,
    color: '#007AFF',
    fontSize: 12,
  },
});

export default styles;
