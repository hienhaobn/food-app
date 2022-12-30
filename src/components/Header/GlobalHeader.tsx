import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'src/utils/dimensions';

import { scale } from '~utils/scale';

const GlobalHeader = () => {
  return (
    <View style={styles.container}>
      <Text>GlobalHeader</Text>
    </View>
  );
};

export default GlobalHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: getStatusBarHeight() + scale(5),
    marginHorizontal: scale(24),
    marginBottom: scale(5),
    alignItems: 'center',
  },
});
