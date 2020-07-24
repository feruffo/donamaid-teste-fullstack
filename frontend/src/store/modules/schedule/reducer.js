import produce from 'immer';

const INITIAL_STATE = {
  hour: null,
  duration: null,
};

export default function schedule(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@schedule/HOUR_CHOICE': {
        draft.hour = action.payload.hour;
        break;
      }
      case '@schedule/DURATION_CHOICE': {
        draft.duration = action.payload.duration;
        break;
      }
      default:
    }
  });
}
