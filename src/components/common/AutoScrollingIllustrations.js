import React, {memo, useEffect, useRef} from 'react';
import {FlatList, View, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const AutoScrollingIllustrations = ({illustrations, renderIllustration}) => {
  const scrollRefLTR = useRef(null); // Left-to-right
  const scrollRefRTL = useRef(null); // Right-to-left

  const scrollSpeed = 2; // pixels per step
  const intervalMs = 30;

  let offsetLTR = 0;
  let offsetRTL = 0;

  useEffect(() => {
    const intervalLTR = setInterval(() => {
      if (scrollRefLTR.current) {
        offsetLTR += scrollSpeed;
        scrollRefLTR.current.scrollToOffset({
          offset: offsetLTR,
          animated: false,
        });
        if (offsetLTR > illustrations.length * width) {
          offsetLTR = 0;
        }
      }
    }, intervalMs);

    const intervalRTL = setInterval(() => {
      if (scrollRefRTL.current) {
        offsetRTL += scrollSpeed;
        scrollRefRTL.current.scrollToOffset({
          offset: offsetRTL,
          animated: false,
        });
        if (offsetRTL > illustrations.length * width) {
          offsetRTL = 0;
        }
      }
    }, intervalMs);

    return () => {
      clearInterval(intervalLTR);
      clearInterval(intervalRTL);
    };
  }, [illustrations]);

  return (
    <>
      {/* Left to Right */}
      <View style={[styles.illustrationContainer, {bottom: 100}]}>
        <FlatList
          ref={scrollRefLTR}
          data={illustrations.concat(illustrations)} // duplicate to mimic infinite
          renderItem={renderIllustration}
          keyExtractor={(item, index) => item.id + index}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
          scrollEnabled={false} // disable manual scroll
        />
      </View>

      {/* Right to Left */}
      <View style={styles.illustrationContainer}>
        <FlatList
          ref={scrollRefRTL}
          data={illustrations.concat(illustrations)}
          renderItem={renderIllustration}
          keyExtractor={(item, index) => item.id + index}
          horizontal
          inverted // 👈 scroll right to left
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
          scrollEnabled={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  illustrationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default memo(AutoScrollingIllustrations);
