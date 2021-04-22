import React from 'react';
import { useSelector } from 'react-redux';

import { Footer } from './Footer';
import { getPhoneMask } from './helpers';

import { AppStateType } from '../../redux/store';

export const FooterContainer = () => {

  const { phone, skype } = useSelector((state: AppStateType) => state.userData.contact);

  const phoneMask = getPhoneMask(phone);

  return (
    <Footer
      phone={phone}
      skype={skype}
      phoneMask={phoneMask} />
  )
}
