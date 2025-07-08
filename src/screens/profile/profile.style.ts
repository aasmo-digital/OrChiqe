import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../constants';
// --- STYLES ---
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  mainTitle: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 28,
    color: Colors.white,
    padding: 20,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    fontFamily: FontFamily.SemiBold,
    color: Colors.white,
    fontSize: 16,
    marginLeft: 15,
  },
  sectionTitle: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 20,
    color: Colors.white,
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 10,
  },
  menuContainer: {marginHorizontal: 20},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: 'rgba(255,255,255,0.15)',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  rowIcon: {marginRight: 15},
  rowText: {
    flex: 1,
    fontFamily: FontFamily.SemiBold,
    color: Colors.white,
    fontSize: 16,
  },
});

export default styles;
