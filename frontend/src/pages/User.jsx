import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const axios = require('axios').default;

function User() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const API_URL = 'http://localhost:3001';

  const {
    user,
    handleClick
  } = useContext(UserContext);

  const registerUser = async () => {
    const body = { name, email, password };
    await axios.post(`${API_URL}/user`, body);
    handleClick();
  };

  const goTasks = async () => {
    await axios.get(`${API_URL}/tasks`)
  };

  const createTasks = () => {

  };
  
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
          type="button"
          onClick={registerUser}
          >
            Entrar
          </button>
      </form>
      <section>
        {name && email && password &&
        <div>
          <h1>User:</h1>
        <ul>
          { user.map((u, index) => (
            <><li key={index}>{u.name} - {u.email}</li>
            <form>
              <button
                type="button"
                onClick={goTasks}
              >
                Tasks
              </button>
              <button
                type="button"
                onClick={createTasks}
              >
               Create Tasks
              </button>
            </form></>
          )) }
        </ul>
        </div>
        }
      </section>
    </>
  );
}

export default User;
