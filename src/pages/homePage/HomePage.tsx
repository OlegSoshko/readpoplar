import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './homePage.module.scss';

import {
  Main,
  OurServices,
  OurPluses,
  Faq,
  OurIntentions,
  HowToOrder,
  BaseMerch
} from '../../components';


export const HomePage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if(Boolean(hash)) {
      const element = document.getElementById(hash.substring(1));

      element?.scrollIntoView({block: "center", behavior: "smooth"});
    }
  }, [hash]);

  return (
    <div className={styles['home-page']}>
      <Main />
      <OurIntentions />
      <OurServices />
      <BaseMerch />
      <HowToOrder />
      <OurPluses />
      <Faq />
    </div>
  )
}