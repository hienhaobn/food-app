/**
 * @format
 */
import { AppRegistry, LogBox, Text, TextInput, TouchableOpacity } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

Text.defaultProps = {};
Text.defaultProps.maxFontSizeMultiplier = 1.0;
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.activeOpacity = 0.7;

AppRegistry.registerComponent(appName, () => App);
