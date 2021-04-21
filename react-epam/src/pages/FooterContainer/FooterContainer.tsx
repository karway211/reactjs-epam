import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Footer } from './Footer';
import { getPhoneMask } from './helpers';

import { AppStateType } from '../../redux/store';

export const FooterContainer = () => {

  const { phone, skype } = useSelector((state: AppStateType) => state.userData.contact);

  const [pfoneMask, setPhoneMask] = useState('');

  useEffect(() => {
    setPhoneMask(getPhoneMask(phone));
  }, [phone]);

  return (
    <Footer
      phone={phone}
      skype={skype}
      pfoneMask={pfoneMask} />
  )
}
