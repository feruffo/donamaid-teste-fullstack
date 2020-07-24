import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import client from './client/sagas';
import schedule from './schedule/sagas';

export default function* rootSaga() {
  return yield all([auth, client, schedule]);
}
