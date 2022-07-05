import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import useArray from './hooks/useArray';

function UserProvider({ children }) {
  const [newInput, setNewInput] = useState('');
  const [todos, addTodos] = useArray();

  const handleInput = ({ target }) => {
    setNewInput(target.value);
  };

  const handleClick = () => {
    addTodos(newInput);
    setNewInput('');
  };

  const value = {
    todos,
    handleInput,
    handleClick,
  };

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;