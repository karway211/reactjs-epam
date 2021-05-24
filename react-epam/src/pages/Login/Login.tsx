import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { actions } from '../../redux/auth-reducer';
import styles from './Login.module.scss';

export function Login() {
  const [data, setData] = useState({
    login: '',
    password: ''
  });

  const dispatch = useDispatch();

  const loginState = useSelector((state: AppStateType) => state.auth.login);
  const passwordState = useSelector((state: AppStateType) => state.auth.password);

  const passwordHandler = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    setData({
      ...data,
      password: value
    })
  };

  const loginHandler = (e: { target: { value: string; }; }) => {
    const value = e.target.value;
    setData({
      ...data,
      login: value
    })
  };

  const onBthHandler = () => {
    const { login, password } = data;
    const { setIsAuth } = actions;
    login === loginState && password === passwordState && dispatch(setIsAuth(true));
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="login"
        value={data.login}
        onChange={loginHandler}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="password"
        value={data.password}
        onChange={passwordHandler}
      />
      <button onClick={onBthHandler} className={styles.bth}>login</button>
    </div>
  )
};
