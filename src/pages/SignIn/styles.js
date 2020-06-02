import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch; /* Vai tentar cocupar toda largura possível */
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 20px;
`;

export const SubmitButton = styled(Button)`
  margin: 5px 0;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
