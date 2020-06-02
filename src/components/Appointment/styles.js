import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${(props) => (props.dataPast ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const Time = styled.Text`
  font-size: 13px;
  color: #999;
  margin-top: 4px;
`;
