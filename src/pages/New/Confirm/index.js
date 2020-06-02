import React, { useMemo } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ route, navigation }) {
  const { provider, time } = route.params;

  const dateFormatted = useMemo(
    () =>
      formatRelative(parseISO(time), new Date(), {
        locale: pt,
      }),
    [time]
  );

  async function ConfirmAppointment() {
    try {
      await api.post('appointments', {
        provider_id: provider.id,
        date: time,
      });

      navigation.reset({
        routes: [{ name: 'Dashboard' }],
      });
    } catch (err) {
      Alert.alert(
        'Falha ao finalizar agendamento',
        'Por favor tente mais tarde'
      );
    }
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>

        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={ConfirmAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.propTypes = {
  route: PropTypes.shape().isRequired,
  navigation: PropTypes.shape({
    reset: PropTypes.func,
  }).isRequired,
};
