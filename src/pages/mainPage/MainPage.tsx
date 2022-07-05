import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header, Communication } from '../../components';

import styles from './mainPage.module.scss';


export const MainPage: React.FC = () => {
  return (
    <div className={styles['main-page']}>
      <Communication className={styles['communication']}/>
      <Header />
        <div className={styles['content']}>
          <Outlet/>
        </div>
      <Footer />
    </div>
  )
}


