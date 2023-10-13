import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {profileIcon} from '../../assets/images';
import {CustomButton} from '../../components';

export const Settings = ({navigation}) => {
  const firstData = [
    {
      title: 'Identity',
      toggle: false,
      onPress: () => navigation?.navigate('Identity'),
    },
    {
      title: 'Security',
      toggle: false,
      onPress: () => navigation?.navigate('Security'),
    },
  ];
  const secondData = [
    {title: 'Phone', toggle: true, toggleValue: true},
    {title: 'Call', toggle: true, toggleValue: false},
    {title: 'Email', toggle: true, toggleValue: true},
    {title: 'SMS', toggle: true, toggleValue: true},
  ];
  const thirdData = [{title: 'Certificate', toggle: true, toggleValue: true}];

  return (
    <View style={styles.container}>
      <Image source={profileIcon} style={styles.image} />
      <CustomButton data={firstData} label="CLIENT" />
      <CustomButton data={secondData} label="PRESENCE DETECTION" />
      <CustomButton data={thirdData} label="TRIGGER" />
    </View>
  );
};
