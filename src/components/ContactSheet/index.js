import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  BackHandler,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {styles} from './styles.';
import {crossIcon} from '../../assets/images';
import {ChatComponent} from '../ChatComponent';
import {TextInputComponent} from '../TextInputComponent';

export const ContactSheet = ({setContactPageIndex}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '100%'], []);

  const [indexState, setIndexState] = useState(false);

  const indexRef = useRef(null);

  useEffect(() => {
    setContactPageIndex(indexState);
  }, [indexState, setContactPageIndex]);

  const Wrapper = indexState === 1 ? TouchableOpacity : View;
  const handleComponent = () => (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Wrapper
          onPress={() => {
            bottomSheetRef.current.collapse();
            Keyboard.dismiss();
          }}>
          {indexState === 1 ? (
            <Image source={crossIcon} style={styles.crossIcon} />
          ) : null}
        </Wrapper>
        <View style={styles.textView(indexState === 1)}>
          <Text style={styles.text(indexState === 1)}>Contact</Text>
        </View>
      </View>
    </View>
  );

  useEffect(() => {
    if (indexState === 0) {
      BackHandler.removeEventListener();
    }
  }, [indexState]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (indexRef.current === 1) {
        bottomSheetRef.current.collapse();
        return true;
      }
    });
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      handleComponent={() => handleComponent(bottomSheetRef)}
      handleIndicatorStyle={styles.indicatorStyle}
      onChange={e => {
        indexRef.current = e;
        setIndexState(e);
      }}>
      <ChatComponent />
      <TextInputComponent />
    </BottomSheet>
  );
};
