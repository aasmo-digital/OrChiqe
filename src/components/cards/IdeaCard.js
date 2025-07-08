import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, FontFamily} from '../../constants';
import Video from 'react-native-video';
const {width, height} = Dimensions.get('window');

const IdeaCard = ({item, onPress, onSavePress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.cardContainer}
      onPress={() => onPress(item)}>
      {/* <ImageBackground
        source={{uri: item.backgroundUrl}}
        style={styles.imageBackground}
        imageStyle={{borderRadius: 20}}> */}

      <Video
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
        resizeMode="cover"
        muted={true} // ✅ Audio band
        style={styles.imageBackground}>
        <View style={styles.overlay}>
          {/* Top-right save button */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => onSavePress(item.id)}>
            <Feather
              name="bookmark"
              size={24}
              color={Colors.white}
              style={item.isSaved ? styles.savedIcon : {}}
            />
          </TouchableOpacity>

          {/* Character and Text Content at the bottom */}
          <View style={styles.contentWrapper}>
            <Image
              source={{uri: item.characterUrl}}
              style={styles.characterImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </View>
          </View>
        </View>
      </Video>

      {/* </ImageBackground> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width,
    height: height / 1.4,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  saveButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 8,
    borderRadius: 50,
  },
  savedIcon: {
    color: Colors.accentYellow, // A yellow color to show it's saved
  },
  contentWrapper: {
    alignItems: 'center',
  },
  characterImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: -30, // Negative margin to create the overlap effect
    zIndex: 1, // Ensure character is above the text background
  },
  textContainer: {
    backgroundColor: '#003B73', // The dark navy blue
    width: '100%',
    paddingTop: 40, // Padding to make space for the overlapping character
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 28,
    color: Colors.white,
    marginBottom: 5,
  },
  cardSubtitle: {
    fontFamily: FontFamily.Regular,
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
});

export default memo(IdeaCard);
