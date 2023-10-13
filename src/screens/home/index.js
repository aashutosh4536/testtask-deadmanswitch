import React, {useState} from 'react';
import {SafeAreaView, Image, View, TouchableOpacity, Text} from 'react-native';
import {
  earthImage,
  outboxIcon,
  powerIcon,
  settingIcon,
} from '../../assets/images';
import {styles} from './styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import {ContactSheet} from '../../components';

export const Home = ({navigation}) => {
  const [contactPageIndex, setContactPageIndex] = useState(0);

  function onSwipeLeft() {
    if (contactPageIndex === 0) {
      navigation.navigate('Settings');
    }
  }
  function onSwipeRight() {
    if (contactPageIndex === 0) {
      navigation.navigate('Outbox');
    }
  }
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <SafeAreaView style={styles.container}>
      <GestureRecognizer
        onSwipeRight={state => onSwipeRight(state)}
        onSwipeLeft={state => onSwipeLeft(state)}
        config={config}
        style={styles.gestureContainer}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation?.navigate('Outbox')}>
            <Image source={outboxIcon} style={styles.headerIcons} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Deadmanswitch</Text>
          <TouchableOpacity onPress={() => navigation?.navigate('Settings')}>
            <Image source={settingIcon} style={styles.headerIcons2} />
          </TouchableOpacity>
        </View>
        <View style={styles.childContainer}>
          <Image source={earthImage} style={styles.earth} />
          <View style={styles.greenView} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomGreyContainer} />
          <View style={styles.absoluteView}>
            <TouchableOpacity style={styles.powerButton}>
              <Image source={powerIcon} style={styles.powerIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </GestureRecognizer>
      <ContactSheet setContactPageIndex={setContactPageIndex} />
    </SafeAreaView>
  );
};
