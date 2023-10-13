import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {rightIcon} from '../../assets/images';

export const Package = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recipient: Email or SMS</Text>
      <Image source={rightIcon} style={styles.rightIcon} />
    </View>
  );
};
