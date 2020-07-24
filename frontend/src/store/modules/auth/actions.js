export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSucess(token, client) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, client },
  };
}

export function signUpRequest(
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
  password
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
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
    },
  };
}

export function signUpProfRequest(name, email, cpf, password) {
  return {
    type: '@auth/SIGN_UP_PROF_REQUEST',
    payload: {
      name,
      email,
      cpf,
      password,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
