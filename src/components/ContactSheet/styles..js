import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  crossIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
    tintColor: Colors.blue,
    flex: 0.1,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: moderateScale(20),
  },
  container: {
    flex: 1,
  },
  textView: isOpen => ({
    flex: isOpen ? 0.9 : 1,
    alignItems: 'center',
    marginBottom: isOpen ? 0 : moderateScale(20),
  }),
  text: isOpen => ({
    fontSize: moderateScale(20),
    fontWeight: isOpen ? 'bold' : 'normal',
    color: isOpen ? Colors.black : Colors.grey,
  }),
  indicatorStyle: {display: 'none'},
});
