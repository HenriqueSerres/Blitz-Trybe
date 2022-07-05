import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function User() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    handleClick
  } = useContext(UserContext);

  return (
    <>
      <form>
        <input
          placeholder="Name"
          type="text"
          name="user"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="submit"
          onClick={ () => handleClick() }
          >
            Entrar
          </button>
      </form>
    </>
  );
}

export default User;
