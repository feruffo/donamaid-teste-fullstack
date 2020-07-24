import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '~/services/history';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/Donamaid_logo.svg';

export default function Header() {
  const profile = useSelector(state => state.client.client);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Donamaid" />
          <Link to="/dashboard">DASHBOARD</Link>
          <button onClick={() => history.push('schedules')} type="button">
            Cadastrar um pedido de limpeza
          </button>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
