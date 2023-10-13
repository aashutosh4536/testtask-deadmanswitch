import {Dimensions, Platform} from 'react-native';

export const isIOS = () => Platform.OS === 'ios';

const {width, height} = Dimensions.get('window');
// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.25) =>
  size + (scale(size) - size) * factor;
export const getDimensions = () => {
  return {height, width};
};
export const getDeviceHeight = Dimensions.get('window').width;
export const getDeviceWidth = Dimensions.get('window').height;
