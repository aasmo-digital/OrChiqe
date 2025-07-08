// src/components/CategoryCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { Colors } from '../../constants';

// ✅ Takes an `isActive` prop to control video playback
const CategoryCard = ({ card, isActive }) => {
  return (
    <View style={[styles.card, { backgroundColor: card.color }]}>
      {/* Container for the 2x2 grid */}
      <View style={styles.videoGridContainer}>
        {/* Top Row */}
        <View style={styles.videoRow}>
          <View style={styles.videoWrapper}>
            <Video
              source={{ uri: card.videos[0].uri }}
              style={styles.video}
              resizeMode="cover"
              muted={true}
              repeat={true}
              paused={!isActive} // ❗CRITICAL: Only play video if the card is active
            />
          </View>
          <View style={styles.videoWrapper}>
            <Video
              source={{ uri: card.videos[1].uri }}
              style={styles.video}
              resizeMode="cover"
              muted={true}
              repeat={true}
              paused={!isActive}
            />
          </View>
        </View>
        {/* Bottom Row */}
        <View style={styles.videoRow}>
          <View style={styles.videoWrapper}>
            <Video
              source={{ uri: card.videos[2].uri }}
              style={styles.video}
              resizeMode="cover"
              muted={true}
              repeat={true}
              paused={!isActive}
            />
          </View>
          <View style={styles.videoWrapper}>
            <Video
              source={{ uri: card.videos[3].uri }}
              style={styles.video}
              resizeMode="cover"
              muted={true}
              repeat={true}
              paused={!isActive}
            />
          </View>
        </View>
      </View>

      {/* Category Name Overlay */}
      <View style={styles.titleOverlay}>
        <Text style={styles.cardIcon}>{card.icon}</Text>
        <Text style={styles.cardTitle}>{card.name}</Text>
      </View>
    </View>
  );
};

// ✅ Styles are co-located with the component
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Important to contain the videos
  },
  videoGridContainer: {
    ...StyleSheet.absoluteFillObject, // Fill the entire card
  },
  videoRow: {
    flex: 1,
    flexDirection: 'row',
  },
  videoWrapper: {
    flex: 1,
    borderColor: 'rgba(255,255,255,0.2)', // Optional: subtle border between videos
    borderWidth: 0.5,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  titleOverlay: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    position: 'absolute',
    flexDirection: 'row',
    borderRadius: 100,
    alignItems: 'center',
    // Add a shadow for better visibility
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default React.memo(CategoryCard); // ✅ Memoize for extra performance