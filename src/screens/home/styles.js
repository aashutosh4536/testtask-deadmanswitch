import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {moderateScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  headerIcons: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  headerIcons2: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  gestureContainer: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    backgroundColor: Colors.lightGrey,
  },
  earth: {
    width: moderateScale(200),
    height: moderateScale(200),
    marginBottom: moderateScale(80),
  },
  childContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(100),
  },
  headerTitle: {
    fontSize: moderateScale(25),
    color: Colors.black,
    fontWeight: 'bold',
  },
  greenView: {
    width: moderateScale(20),
    height: moderateScale(20),
    backgroundColor: Colors.lightGreen,
    borderRadius: moderateScale(30),
    marginBottom: moderateScale(80),
  },
  powerButton: {
    backgroundColor: Colors.blue,
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  powerIcon: {
    width: moderateScale(50),
    height: moderateScale(50),
    tintColor: Colors.white,
  },
  absoluteView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  bottomContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%',
  },
  bottomGreyContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: Colors.lightGrey,
  },
});
