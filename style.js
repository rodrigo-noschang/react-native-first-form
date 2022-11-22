import styled from 'styled-components/native';

export const InputContainer = styled.View`
    flex-direction: row;
    margin: 10px 0;
    justify-content: center;
    align-self: center;
    border-bottom-width: 1px;
    border-bottom-color: #999;
    border-bottom-style: solid;
    padding-bottom: 5px;
`;

export const SubmitButton = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #DDD;
`;

export const ErrorMessage = styled.Text`
    color: red;
`;

export const SubmitButtonText = styled.Text`
    font-size: 20px;
    text-align: center;
    padding: 10px 0;
    background-color: darkblue;
    color: #fff
`;


