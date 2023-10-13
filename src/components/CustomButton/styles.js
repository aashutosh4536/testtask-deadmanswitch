import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  button: (firstIndex, lastIndex) => ({
    backgroundColor: Colors.white,
    paddingVertical: moderateScale(10),
    marginTop: firstIndex ? moderateScale(10) : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    borderTopLeftRadius: firstIndex ? moderateScale(10) : 0,
    borderTopRightRadius: firstIndex ? moderateScale(10) : 0,
    borderBottomLeftRadius: lastIndex ? moderateScale(10) : 0,
    borderBottomRightRadius: lastIndex ? moderateScale(10) : 0,
    borderBottomWidth: lastIndex ? 0 : 1,
    borderColor: Colors.lightGrey,
    alignItems: 'center',
    height: moderateScale(50),
  }),
  arrowIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  label: {
    color: Colors.grey,
  },
  title: {
    color: Colors.black,
  },
});
