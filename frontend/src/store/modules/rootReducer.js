import { combineReducers } from 'redux';

import auth from './auth/reducer';
import client from './client/reducer';
import schedule from './schedule/reducer';

export default combineReducers({
  auth,
  client,
  schedule,
});
