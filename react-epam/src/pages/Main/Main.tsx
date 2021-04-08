import React from 'react';
import { useSelector } from 'react-redux';

import { AppStateType } from '../../redux/store';

import styles from './Main.module.scss';

export function Main() {
  const { image, alt } = useSelector((state: AppStateType) => state.userData.avatar);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.description}>
          <span>Front-End Developer</span>
        </div>
        <img src={image} alt={alt} />
      </div>
    </div>
  )
}
