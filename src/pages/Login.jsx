import React, { useContext } from 'react';
import MyBtn from '../componemts/UI/Buttons/MyBtn';
import MyInput from '../componemts/UI/Input/MyInput';
import { AuthContex } from '../context';

export function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContex);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <form onSubmit={login}>
      <h2>LOG IN to surf freelly </h2>
      <MyInput type="text " placeholder="Login" />
      <MyInput type="pasword" placeholder="Pasword" />
      <MyBtn>Enter</MyBtn>
    </form>
  );
}
