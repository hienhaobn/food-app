import { Dimensions } from 'react-native';
import Config from 'react-native-config';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

// Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = parseInt(Config.BASE_SCREEN_WIDTH!) || 375;
const guidelineBaseHeight = parseInt(Config.BASE_SCREEN_HEIGHT!) || 812;

export const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

export const verticalScale = (size: number) => (longDimension / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export const moderateVerticalScale = (size: number, factor = 0.5) => size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
