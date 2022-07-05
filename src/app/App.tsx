import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from '../servises';

import styles from './app.module.scss';


export const App: React.FC = () => {
  return (
    <div className={styles['app']}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
