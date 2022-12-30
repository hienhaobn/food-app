import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import StackScreens from './StackScreens';

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        // backgroundColor={Colors[theme]?.bgColor}
        barStyle={'light-content'}
        translucent
      />
      <StackScreens />
    </NavigationContainer>
  );
};

export default StackNavigation;
