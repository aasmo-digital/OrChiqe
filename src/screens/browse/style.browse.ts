import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../constants';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary}, // Main blue background
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {fontFamily: FontFamily.Bold, fontSize: 18, color: Colors.white},
  badge: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {fontFamily: FontFamily.Bold, color: '#34B3E4'},
  heroCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#003B73',
  }, // Dark blue
  heroImage: {width: '100%', height: 200, resizeMode: 'cover'},
  heroContent: {padding: 20},
  heroTitle: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 28,
    color: Colors.white,
    marginBottom: 5,
  },
  heroSubtitle: {
    fontFamily: FontFamily.Regular,
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    margin: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  searchIcon: {marginRight: 10},
  searchInput: {flex: 1, height: 50, fontFamily: FontFamily.Regular},
  filterButton: {padding: 10},
  rowContainer: {marginTop: 10, marginLeft: 20},
  rowTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: 20,
    color: Colors.white,
    marginBottom: 10,
  },
  activityCard: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 16,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityImage: {width: 70, height: 70},
});

export default styles;
