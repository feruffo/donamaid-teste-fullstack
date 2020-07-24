export function updateProfileRequest(data) {
  return {
    type: '@client/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(client) {
  return {
    type: '@client/UPDATE_PROFILE_SUCCESS',
    payload: { client },
  };
}

export function updateProfileFailure() {
  return {
    type: '@client/UPDATE_PROFILE_FAILURE',
  };
}
