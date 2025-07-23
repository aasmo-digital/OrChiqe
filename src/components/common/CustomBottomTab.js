// components/CustomBottomTab.js

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../constants';

const CustomBottomTab = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName = 'home';
        if (route.name === 'Browse') iconName = 'home';
        else if (route.name === 'Library') iconName = 'grid';
        else if (route.name === 'Search') iconName = 'search';
        else if (route.name === 'Profile') iconName = 'user';

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabButton}>
            <Feather
              name={iconName}
              size={isFocused ? 26 : 22}
              color={isFocused ? Colors.white : Colors.grayLight}
            />
            <Text
              style={{
                color: isFocused ? Colors.white : Colors.grayLight,
                fontSize: 12,
                marginTop: 4,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 60,
    // backgroundColor: 'rgba(255,255,255,0.15)',
    elevation: 10,

    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default CustomBottomTab;
