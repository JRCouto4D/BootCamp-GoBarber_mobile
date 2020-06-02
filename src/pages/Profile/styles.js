import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin: 30px 0;
`;
export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;
export const FormInput = styled(Input)`
  margin-bottom: 20px;
`;
export const Separector = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.6);
  margin: 10px 0 30px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;
