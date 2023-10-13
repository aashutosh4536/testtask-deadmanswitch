import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {flex: 1},
  plusIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
    marginRight: moderateScale(moderateScale(10)),
  },
  upArrow: {
    backgroundColor: Colors.lightGrey2,
    width: moderateScale(30),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(10),
    borderRadius: moderateScale(30),
  },
  upArrowIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
});
