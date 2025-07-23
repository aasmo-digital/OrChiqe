// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Feather from 'react-native-vector-icons/Feather';

// // Import your screen components

// import {Colors} from '../constants'; // Your color constants
// import BrowseScreen from '../screens/browse/BrowseScreen';
// import LibraryScreen from '../screens/library/LibraryScreen';
// import ProfileScreen from '../screens/profile/ProfileScreen';
// import FindIdeasScreen from '../screens/search/FindIdeasScreen';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarActiveTintColor: Colors.primary, // Your main purple color
//         tabBarInactiveTintColor: Colors.grayMedium,
//         tabBarStyle: {
//           backgroundColor: Colors.white,
//           borderTopWidth: 0,
//           elevation: 10,
//           height: 60,
//           paddingBottom: 5,
//         },
//         tabBarIcon: ({color, size, focused}) => {
//           let iconName;
//           if (route.name === 'Browse') iconName = 'home';
//           else if (route.name === 'Library') iconName = 'grid';
//           else if (route.name === 'Search') iconName = 'search';
//           else if (route.name === 'Profile') iconName = 'user';

//           return (
//             <Feather name={iconName} size={focused ? 26 : 24} color={color} />
//           );
//         },
//       })}>
//       <Tab.Screen name="Browse" component={BrowseScreen} />
//       <Tab.Screen name="Library" component={LibraryScreen} />
//       <Tab.Screen name="Search" component={FindIdeasScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;

// navigation/BottomTabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BrowseScreen from '../screens/browse/BrowseScreen';
import LibraryScreen from '../screens/library/LibraryScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import FindIdeasScreen from '../screens/search/FindIdeasScreen';
import CustomBottomTab from '../components/common/CustomBottomTab';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true, // 👈 Add this line
      }}
      tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Screen name="Browse" component={BrowseScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Search" component={FindIdeasScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
