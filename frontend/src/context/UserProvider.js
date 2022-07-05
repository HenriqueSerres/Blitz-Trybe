import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [newInput, setNewInput] = useState('');
  const [user, setUser] = useState([]);

  const handleInput = ({ target }) => {
    setNewInput(target.value);
  };

  const handleClick = () => {
    setUser(user.push(newInput));
    setNewInput('');
  };

  const value = {
    user,
    handleInput,
    handleClick,
  };

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default UserProvider;