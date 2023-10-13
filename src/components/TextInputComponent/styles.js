import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(10),
    justifyContent: 'flex-end',
    paddingBottom: moderateScale(10),
  },
  textInput: {
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: moderateScale(30),
    padding: moderateScale(10),
    flex: 0.95,
  },
  upArrow: {
    backgroundColor: Colors.blue,
    width: moderateScale(40),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(30),
  },
  upArrowIcon: {
    height: moderateScale(35),
    width: moderateScale(35),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
