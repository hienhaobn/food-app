import RNFS from 'react-native-fs';
import { MMKV } from 'react-native-mmkv';

import { EN } from './config/languages';

export const getLanguageCodeFomAsyncStorage = () => {
  try {
    // const codeFromStorage = RNFS.ExternalDirectoryPath
  } catch (error) {
    return EN.locale;
  }
};
