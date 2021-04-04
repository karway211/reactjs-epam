import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPhoneMask } from './helpers';
import Footer from './Footer';
import { AppStateType } from '../../redux/store';

const FooterContainer = () => {

  const { phone, skype } = useSelector((state: AppStateType) => state.userData.contact);

  const [pfoneMask, setPhoneMask] = useState('');

  useEffect(() => {
    setPhoneMask(getPhoneMask(phone));
  }, [phone]);

  return <Footer
    phone={phone}
    skype={skype}
    pfoneMask={pfoneMask} />
}

export default FooterContainer;
