import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {isIOS} from '../../utils/helper';
import {upArrow} from '../../assets/images';

export const TextInputComponent = () => {
  const Wrapper = isIOS() ? KeyboardAvoidingView : View;
  return (
    <Wrapper
      style={styles.container}
      behavior={isIOS() ? 'padding' : 'height'}
      keyboardVerticalOffset={isIOS() ? 100 : 10}>
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message here..."
          />
          <TouchableOpacity onPress={() => null} style={styles.upArrow}>
            <Image source={upArrow} style={styles.upArrowIcon} />
          </TouchableOpacity>
        </View>
      </Pressable>
    </Wrapper>
  );
};
