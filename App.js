import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import FormInput from './components/FormInput';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default function RegisterForm() {
  return (
    <KeyboardAvoidingView style = {styles.container}>
      <StatusBar/>
      <View>
        <IconAnt name = "user" size = {25} color = '#000'/>
        <FormInput field = 'name'/> 
      </View>

      <View>
        <IconAnt name = "mail" size = {25} color = '#000'/>
        <FormInput field = 'email'/> 
      </View>

      <View>
        <IconAnt name = "lock" size = {25} color = '#000'/>
        <FormInput field = 'password'/> 
      </View>

      <View>
        <IconAnt name = "lock" size = {25} color = '#000'/>
        <FormInput field = 'confirmPassword'/> 
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
