import React from 'react';

import styles from './Footer.module.scss';

type PropsType = {
  phone: string,
  phoneMask: string,
  skype: string,
}

export function Footer({ phone, phoneMask, skype }: PropsType) {

  return (
    <div className={styles.footer}>
      <a href={`tel:${phoneMask}`} className={styles.link}>+{phone}</a>
      <a href={`skype:${skype}`} className={styles.link}>skype</a>
    </div>
  )
}
