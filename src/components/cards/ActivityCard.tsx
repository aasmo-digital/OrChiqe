// src/components/features/ActivityCard.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  GestureResponderEvent,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Ensure installed
import {Colors, FontFamily} from '../../constants';

const {width, height} = Dimensions.get('window');

type ActivityCardProps = {
  title: string;
  imageUrl: any;
  onPress: (event: GestureResponderEvent) => void;
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={{
          uri: imageUrl,
        }}
        borderRadius={10}
        style={styles.image}
        // imageStyle={{borderRadius: 16}}
      >
        {/* <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}> */}
        <Text style={styles.title}>{title}</Text>
        {/* </LinearGradient> */}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 0.4,
    margin: 6,
    // aspectRatio: 1,
    borderRadius: 16,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
    height: height / 4.8,
    width: width / 3.5,
    borderWidth: 0.5,
    borderColor: Colors.grayLight,
  },
  image: {
    // flex: 1,
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
    borderRadius: 16,
    justifyContent: 'flex-end',
    padding: 8,
  },
  title: {
    fontFamily: FontFamily.Bold,
    fontSize: 14,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    padding: 5,
  },
});

export default ActivityCard;
