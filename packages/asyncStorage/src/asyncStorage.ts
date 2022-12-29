import RNFS from 'react-native-fs';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'user-storage',
  path: `${RNFS.ExternalDirectoryPath}/storage`,
  encryptionKey: 'hunter2',
});
