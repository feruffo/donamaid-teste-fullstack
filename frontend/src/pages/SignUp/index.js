import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/Donamaid_logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  cpf: Yup.string().required('O cpf é obrigatório'),
  street: Yup.string().required('O endereço é obrigatório'),
  number: Yup.string().required('O numero é obrigatório'),
  complement: Yup.string(),
  zipcode: Yup.string().required('O CEP é obrigatório'),
  city: Yup.string().required('A cidade é obrigatória'),
  state: Yup.string().required('O estado é obrigatório'),
  country: Yup.string().required('O Páis é obrigatório'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({
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
  }) {
    dispatch(
      signUpRequest(
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
      )
    );
  }

  return (
    <>
      <img src={logo} alt="Donamaid" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="cpf" type="text" placeholder="Seu CPF" />

        <Input name="street" placeholder="Seu endereço" />
        <Input name="number" placeholder="Seu número" />
        <Input name="complement" placeholder="complemento" />
        <Input name="zipcode" placeholder="Seu CEP" />
        <Input name="city" placeholder="Sua cidade" />
        <Input name="state" placeholder="Seu estado" />
        <Input name="country" placeholder="Seu País" />

        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
