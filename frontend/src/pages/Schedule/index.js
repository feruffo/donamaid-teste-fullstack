import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '~/services/api';

import { hourRequest } from '~/store/modules/schedule/actions';
import { Container, ScheduleButton } from './styles';

export default function Schedules() {
  const dispatch = useDispatch();
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function loadSchedules() {
      // const data = await api.get('clients/adresses');
      const response = await api.get('schedules');
      setSchedules(response.data);
    }
    loadSchedules();
  }, []);

  function handleHour(hour) {
    dispatch(hourRequest(hour));
  }

  return (
    <Container>
      <h1>Horários disponíveis</h1>
      <ul>
        {schedules.map(schedule => (
          <ScheduleButton
            onClick={() => handleHour(schedule.hour)}
            disabled={!schedule.isAvailable}
            available={schedule.isAvailable}
            key={schedule.hour}
          >
            <strong>{`Horário Início: ${schedule.hour} horas`}</strong>
            <span>{schedule.isAvailable ? 'Em Aberto' : 'Indisponível'}</span>
          </ScheduleButton>
        ))}
      </ul>
    </Container>
  );
}
