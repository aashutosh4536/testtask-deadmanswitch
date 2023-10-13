import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const ChatComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Text style={styles.imageText}>DMS</Text>
      </View>
      <View>
        <Text style={styles.heading}>DEADMANSWITCH</Text>
        <Text style={styles.subHeading}>Hello, How can I help you?</Text>
      </View>
    </View>
  );
};
