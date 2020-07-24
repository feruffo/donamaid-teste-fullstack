/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '~/services/api';

import { orderRequest } from '~/store/modules/schedule/actions';
import { Container, ProfessionalButton } from './styles';

export default function Professional() {
  const hour = useSelector(state => state.schedule.hour);
  const duration = useSelector(state => state.schedule.duration);

  const dispatch = useDispatch();
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    async function loadProfessionals() {
      const response = await api.get('professionals');

      const newArrayProfessioanals = response.data.filter(x => {
        const teste = x.orders.filter(
          o => hour < o.schedule || o.schedule + o.duration < hour
        );
        return x.orders.length === 0 || teste.length > 0;
      });

      setProfessionals(newArrayProfessioanals);
    }
    loadProfessionals();
  }, []);

  function handleOrder(id) {
    dispatch(orderRequest(id, hour, duration));
  }

  return (
    <Container>
      <h1>Profissionais disponíveis</h1>
      <ul>
        {professionals.map(professional => (
          <ProfessionalButton
            onClick={() => handleOrder(professional.id)}
            key={professional.id}
          >
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={professional.name}
            />
            <strong>{`Nome: ${professional.name}`}</strong>
          </ProfessionalButton>
        ))}
      </ul>
    </Container>
  );
}
