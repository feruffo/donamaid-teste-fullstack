import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { client, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSucess(token, client));

    history.push('/dashboard');
  } catch (err) {
    toast.error(
      'Falha na autenticação, verifique se o seu email é de cliente!'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const {
      name,
      email,
      cpf,
      street,
      number,
      complement,
      zipcode,
      city,
      state,
      country,
      password,
    } = payload;

    const response = yield call(api.post, 'clients', {
      name,
      email,
      cpf,
      password,
    });

    const { id } = response.data;

    yield call(api.post, 'clients/adresses', {
      street,
      number,
      complement,
      zipcode,
      city,
      state,
      country,
      client_id: id,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export function* signUpProf({ payload }) {
  try {
    const { name, email, cpf, password } = payload;

    yield call(api.post, 'professionals', {
      name,
      email,
      cpf,
      password,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_UP_PROF_REQUEST', signUpProf),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
