import {View, Text, Image, Switch, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {rightIcon} from '../../assets/images';

export const CustomButton = ({label = '', data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {data?.map((item, index) => (
        <Pressable
          onPress={item?.onPress}
          key={[item, index]}
          style={styles.button(index === 0, index === data?.length - 1)}>
          <Text style={styles.title}>{item?.title}</Text>
          {item?.toggle ? (
            <Switch
              onValueChange={item?.toggleSwitch}
              value={item?.toggleValue}
            />
          ) : (
            <Image source={rightIcon} style={styles.arrowIcon} />
          )}
        </Pressable>
      ))}
    </View>
  );
};
