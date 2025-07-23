import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../constants';

// --- STYLES ---
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  mainTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: 22,
    color: Colors.white,
    flex: 1,
    textAlign: 'center',
  },
  closeButton: {position: 'absolute', left: 15, top: 15},
  section: {marginBottom: 25, paddingHorizontal: 20},
  sectionHeader: {flexDirection: 'row', alignItems: 'center', marginBottom: 15},
  icon: {fontSize: 20, marginRight: 10},
  sectionTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: 18,
    color: Colors.white,
  },
  tagsContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  tag: {
    // backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 300,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: Colors.grayLight,
  },
  tagSelected: {
    // backgroundColor: '#F9A825'
    backgroundColor: 'rgba(255,255,255,0.2)',
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  tagText: {fontFamily: FontFamily.SemiBold, color: Colors.white},
  tagTextSelected: {color: Colors.white},
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  clearAllText: {
    fontFamily: FontFamily.SemiBold,
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  viewIdeasButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9A825',
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 10,
  },
  viewIdeasButtonText: {
    fontFamily: FontFamily.Bold,
    color: Colors.black,
    fontSize: 16,
    marginRight: 10,
  },
  ideaCountBadge: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  ideaCountText: {
    fontFamily: FontFamily.Bold,
    color: Colors.white,
    fontSize: 12,
  },
});

export default styles;
