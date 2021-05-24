import React from 'react';

import styles from './Footer.module.scss';

type PropsType = {
  phone: string,
  phoneMask: string,
  skype: string,
  isAuth: boolean,
}

export function Footer({ phone, phoneMask, skype, isAuth }: PropsType) {

  return (
    <div className={styles.footer}>
      {isAuth && <a href={`tel:${phoneMask}`} className={styles.link}>+{phone}</a>}
      {isAuth && <a href={`skype:${skype}`} className={styles.link}>skype</a>}
    </div>
  )
}
