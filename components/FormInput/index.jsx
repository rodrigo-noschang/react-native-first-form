import React, { useState } from 'react';
import { View, Text, TextInput } from "react-native";
import IconFeather from 'react-native-vector-icons/Feather';

const FormInput = ({ field }) => {
    const [showPassword, setShowPassword] = useState(false);

    const capitalizeFieldNameFirstLetter = (fieldName) => {
        const splittedName = fieldName.split('');
        const capitalized = splittedName[0].toUpperCase();

        splittedName.splice(0, 1, capitalized);
        return splittedName.join('');
    }

    const fieldNameCapitalized = capitalizeFieldNameFirstLetter(field);

    const changePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <View>
                <TextInput placeholder = {fieldNameCapitalized}
                    autoCapitalize = {field === 'email'}
                    secureTextEntry = {field === 'password' || field === 'confirmPassword'}
                    />

                { (field === 'password' || field === 'confirmPassword') &&

                <View>
                    { showPassword ? 
                        <IconFeather name = 'eye' size = {25} color = '#000' onPress = {changePasswordVisibility}/>
                    :    
                        <IconFeather name = 'eye-off' size = {25} color = '#000' onPress = {changePasswordVisibility}/>
                    }
                </View> 
                }
            </View>
            {/* Error: <Text> {fieldNameCapitalized} inválido </Text> */}
        </>
    )
}

export default FormInput;