/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet, 
  Text,
  useColorScheme
} from 'react-native';


import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from './src/components/ResetPasswordScreen/ResetPasswordScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';


const App = () => {  
  return (
    <SafeAreaView style={styles.root}>
      <ResetPasswordScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 root:{
   flex:1,
   backgroundColor: '#F9FBFC'
 }
});

export default App;
