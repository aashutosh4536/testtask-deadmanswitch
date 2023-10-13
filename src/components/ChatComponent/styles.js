import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: moderateScale(40),
  },
  imageView: {
    width: moderateScale(30),
    height: moderateScale(30),
    backgroundColor: Colors.black,
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(10),
  },
  imageText: {
    color: Colors.white,
    fontSize: moderateScale(10),
  },
  heading: {
    color: Colors.grey,
    marginBottom: moderateScale(5),
  },
  subHeading: {
    color: Colors.black,
  },
});
