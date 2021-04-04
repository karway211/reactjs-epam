import React from 'react';
import styles from './Footer.module.scss';

type PropsType = {
  phone: string
  pfoneMask: string
  skype: string
}

const Footer: React.FC<PropsType> = ({ phone, pfoneMask, skype }) => {

  return <div className={styles.footer}>
    <a href={`tel:${pfoneMask}`} className={styles.link}>+{phone}</a>
    <a href={`skype:${skype}`} className={styles.link}>skype</a>
  </div>
}

export default Footer;
