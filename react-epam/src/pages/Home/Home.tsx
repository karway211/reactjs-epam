import React from 'react';
import { HOME_TEXT } from './store';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <h2 className={styles.home}>
      {HOME_TEXT}
    </h2>
  )
}
