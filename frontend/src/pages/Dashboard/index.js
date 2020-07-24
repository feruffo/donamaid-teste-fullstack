import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import api from '~/services/api';

import { Container, Order } from './styles';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get('clients/orders');
      setOrders(response.data);
    }
    loadOrder();
  }, []);

  async function handleDelete(id) {
    await api.delete(`/clients/orders/${id}`);

    setOrders(orders.filter(order => order.id !== id));
  }

  return (
    <Container>
      <h1>Pedidos marcados</h1>
      <ul>
        {orders.map(order => (
          <Order key={order.id}>
            <strong>{`Horário de início: ${order.schedule} horas`}</strong>
            <strong>{`Duração: ${order.duration} horas`}</strong>
            <span>{`Profissional: ${order.Professional.name}`}</span>
            <span>
              {`Endereço: ${order.Adress.street}, numero: ${order.Adress.number}`}
            </span>
            <button
              onClick={() => {
                handleDelete(order.id);
              }}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </Order>
        ))}
      </ul>
    </Container>
  );
}
