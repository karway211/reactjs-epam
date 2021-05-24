import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { AppStateType } from '../../redux/store';

import styles from './Header.module.scss';

export function Header() {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  return (
    <header className={styles.header}>
      {isAuth && <NavLink className={styles.link} to={'/home'} activeClassName={styles.activeLink}>home</NavLink>}
      {isAuth && <NavLink className={styles.link} to={'/profile'} activeClassName={styles.activeLink}>profile</NavLink>}
      {isAuth && <NavLink className={styles.link} to={'/cards'} activeClassName={styles.activeLink}>cards</NavLink>}
    </header>
  )
}
