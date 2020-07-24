import { takeLatest, all, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

export function hourChoice() {
  history.push('duration');
}
export function durationChoice() {
  history.push('professionals');
}

export function* order({ payload }) {
  try {
    const { professional_id, schedule, duration } = payload;

    const response = yield call(api.get, 'clients/adresses');

    const { id } = response.data[0];

    yield call(api.post, 'clients/orders', {
      schedule,
      duration,
      professional_id,
      adress_id: id,
    });
    toast.success('Pedido cadastrado com sucesso!');
    history.push('dashboard');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
  }
}

export default all([
  takeLatest('@schedule/HOUR_CHOICE', hourChoice),
  takeLatest('@schedule/DURATION_CHOICE', durationChoice),
  takeLatest('@schedule/ORDER_REQUEST', order),
]);
