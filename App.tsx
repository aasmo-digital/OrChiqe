import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Colors from './src/constants/colors';
import AppNavigator from './src/navigation/AppNavigator';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.primary} // Using your consistent color constant
        />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App
