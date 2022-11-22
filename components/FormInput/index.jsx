import React, { useState } from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import { useController } from 'react-hook-form';

import { FormInputContainer, 
    InputFieldContainer, 
    Input, 
    Visibility, 
    ErrorContainer, 
    ErrorMessage } from './style';

const FormInput = ({ name, control }) => {
    const [showPassword, setShowPassword] = useState(false);

    const { field } = useController({
        control,
        name
    })

    const capitalizeFieldNameFirstLetter = (fieldName) => {
        const splittedName = fieldName.split('');
        const capitalized = splittedName[0].toUpperCase();

        splittedName.splice(0, 1, capitalized);
        return splittedName.join('');
    }

    const fieldNameCapitalized = capitalizeFieldNameFirstLetter(name);

    const changePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <FormInputContainer>
            <InputFieldContainer>
                <Input placeholder = {fieldNameCapitalized}
                    autoCapitalize = {name === 'email'}
                    secureTextEntry = {(name === 'password' || name === 'confirmPassword') && !showPassword}
                    onChangeText = {field.onChange}
                    value = {field.value}
                    />


                { (name === 'password' || name === 'confirmPassword') &&
                <Visibility>
                    { showPassword ? 
                        <IconFeather name = 'eye' size = {25} color = '#000' onPress = {changePasswordVisibility}/>
                    :    
                        <IconFeather name = 'eye-off' size = {25} color = '#000' onPress = {changePasswordVisibility}/>
                    }
                </Visibility> 
                }
            </InputFieldContainer>
        </FormInputContainer>
    )
}

export default FormInput;