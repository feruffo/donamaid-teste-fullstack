import produce from 'immer';

const INITIAL_STATE = {
  client: null,
};

export default function client(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.client = action.payload.client;
        break;
      }
      case '@client/UPDATE_PROFILE_SUCCESS': {
        draft.client = action.payload.client;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.client = null;
        break;
      }
      default:
    }
  });
}
