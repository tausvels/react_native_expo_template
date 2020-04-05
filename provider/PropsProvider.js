import React, { createContext } from 'react';

const Context = createContext();

const PropsProvider = (props) => {
  // Accepts value from APP component through the use of props.
  const dataPassed = {
    fromApp: props.value,
    fromProvider: 'This is just a hardcoded data, can also be the states declared here'
  };

  return (
    <Context.Provider value = {dataPassed}>
      {props.children}
    </Context.Provider>
  )
}

export {PropsProvider, Context};