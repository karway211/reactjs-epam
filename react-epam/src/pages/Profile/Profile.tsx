import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import styles from './Profile.module.scss';

export const Profile = () => {
  const { image, alt } = useSelector((state: AppStateType) => state.userData.avatar);
  const { firstName, lastName } = useSelector((state: AppStateType) => state.userData.user);
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.description}>
          <span>Front-End Developer</span>
        </div>
        <img src={image} alt={alt} />
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.aboutMeItem}>
          {`${firstName} ${lastName}`}
        </div>
        <hr />
        <div className={styles.aboutMeItem}>
          junior front-end developer
        </div>
        <hr />
        <div className={styles.aboutMeItem}>
          My professional skills:
        </div>
        <div className={styles.skills}>
          <span className={styles.skillsItem}>javascript</span>
          <span className={styles.skillsItem}>typescript</span>
          <span className={styles.skillsItem}>react</span>
          <span className={styles.skillsItem}>redux</span>
          <span className={styles.skillsItem}>thunk</span>
          <span className={styles.skillsItem}>saga</span>
          <span className={styles.skillsItem}>redux-toolkit</span>
          <span className={styles.skillsItem}>next js</span>
          <span className={styles.skillsItem}>webpack</span>
          <span className={styles.skillsItem}>gulp</span>
        </div>
      </div>
    </div>
  )
}