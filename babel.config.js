module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.ios.js', '.android.js'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '^~(.+)': './src/\\1',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console', 'ignite-ignore-reactotron'],
    },
  },
};
