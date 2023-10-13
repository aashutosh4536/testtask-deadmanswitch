import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {
  Home,
  Identity,
  Outbox,
  Package,
  Security,
  Settings,
} from '../../screens';
import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {plusIcon, upArrow} from '../../assets/images';
import {styles} from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const HeaderRightOutbox = navigation => (
  <TouchableOpacity onPress={() => navigation?.navigate('Package')}>
    <Image source={plusIcon} style={styles.plusIcon} />
  </TouchableOpacity>
);

const HeaderRightPackage = () => (
  <TouchableOpacity onPress={() => null} style={styles.upArrow}>
    <Image source={upArrow} style={styles.upArrowIcon} />
  </TouchableOpacity>
);

const StackNavigator = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            ...TransitionPresets.RevealFromBottomAndroid,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Outbox"
            component={Outbox}
            options={({navigation}) => ({
              headerBackTitleVisible: false,
              headerRight: () => HeaderRightOutbox(navigation),
            })}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{headerBackTitleVisible: false}}
          />
          <Stack.Screen
            name="Identity"
            component={Identity}
            options={{headerBackTitleVisible: false}}
          />
          <Stack.Screen
            name="Security"
            component={Security}
            options={{headerBackTitleVisible: false}}
          />
          <Stack.Screen
            name="Package"
            component={Package}
            options={() => ({
              headerBackTitleVisible: false,
              headerRight: () => HeaderRightPackage(),
            })}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default StackNavigator;
