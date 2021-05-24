import React from 'react';
import { useSelector } from 'react-redux';

import { Footer } from './Footer';
import { getPhoneMask } from './helpers';

import { AppStateType } from '../../redux/store';

export const FooterContainer = () => {

  const { phone, skype } = useSelector((state: AppStateType) => state.userData.contact);
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

  const phoneMask = getPhoneMask(phone);

  return (
    <Footer
      phone={phone}
      skype={skype}
      isAuth={isAuth}
      phoneMask={phoneMask} />
  )
}
