import React from 'react';
import { Button } from 'antd';


import styles from './header.module.scss';

import { Menu } from '../../components';
import logo from '../../images/logo-192.png';

export const Header: React.FC = () => {
  return (
    <div className={styles['header']} >
      <img className={styles['logo']} src={logo} alt='logo' height={100}/>
      <Menu />
      <Button type='primary'>Оставить заяявку</Button>
    </div>
  )
}