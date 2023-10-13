import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: moderateScale(10),
    padding: moderateScale(10),
    marginTop: moderateScale(10),
    borderColor: Colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.grey,
  },
  rightIcon: {
    width: moderateScale(15),
    height: moderateScale(15),
    tintColor: Colors.grey,
  },
});
