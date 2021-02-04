import React, { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [modal, setmodal] = useState(false);
  const clickHandler = () => {
    setmodal(!modal);
  };
  return (
    <ModalContext.Provider value={{ modal, setmodal, clickHandler }}>
      {props.children}
    </ModalContext.Provider>
  );
};
