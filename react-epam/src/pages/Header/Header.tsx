import React from 'react';
import { useSelector } from 'react-redux';

import { AppStateType } from '../../redux/store';

import styles from './Header.module.scss';

export function Header() {
  const { firstName, lastName } = useSelector((state: AppStateType) => state.userData.user);
  return (
    <header className={styles.header}>
      <h1 className={styles.headline}>{`${firstName} ${lastName}`}</h1>
    </header>
  )
}
