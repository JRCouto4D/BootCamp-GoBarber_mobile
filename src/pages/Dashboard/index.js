import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import Background from '~/components/Background';

import api from '~/services/api';

import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [del, setDel] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadAppointment() {
      const response = await api.get('/appointments');

      setAppointments(response.data);
    }

    if (isFocused) {
      loadAppointment();
    }
  }, [isFocused, del]);

  async function HandleDelete(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
    setDel(!del);
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => HandleDelete(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}
