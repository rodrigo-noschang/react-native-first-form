import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback } from 'react-native';
import FormInput from './components/FormInput';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { InputContainer, SubmitButton, SubmitButtonText, ErrorMessage } from './style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function App() {
  const formSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Formato de email invalido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
    confirmPassword: yup.string().required('Confirme a senha')
      .oneOf([yup.ref('password'), null], 'Senhas devem ser iguais')
  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  });

  const showData = data => {
    console.log('Submiting -> ', data);
  }

  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <KeyboardAvoidingView style = {styles.formContainer}>
        <StatusBar/>

        <InputContainer>
          <IconAnt name = "user" size = {25} color = '#000'/>
          <FormInput name = 'name' control = {control} /> 
        </InputContainer>

        { errors.name && <ErrorMessage> {errors.name.message} </ErrorMessage> }

        <InputContainer>
          <IconAnt name = "mail" size = {25} color = '#000'/>
          <FormInput name = 'email' control = {control} /> 
        </InputContainer>

        { errors.email && <ErrorMessage> {errors.email?.message} </ErrorMessage> }

        <InputContainer>
          <IconAnt name = "lock" size = {25} color = '#000'/>
          <FormInput name = 'password' control = {control} /> 
        </InputContainer>

        { errors.password && <ErrorMessage> {errors.password?.message} </ErrorMessage> }

        <InputContainer>
          <IconAnt name = "lock" size = {25} color = '#000'/>
          <FormInput name = 'confirmPassword' control = {control} /> 
        </InputContainer>

        { errors.confirmPassword && <ErrorMessage> {errors.confirmPassword?.message} </ErrorMessage> }

        <SubmitButton onPress = {handleSubmit(showData)}> 
          <SubmitButtonText> Enviar </SubmitButtonText>
        </SubmitButton>
        
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25 
  }
})