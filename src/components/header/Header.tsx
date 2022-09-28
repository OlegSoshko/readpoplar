import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './header.module.scss';

import { Menu } from '../../components';
import logo from '../../images/logo-192.png';


export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClickLogo = useCallback(() => {
    navigate('/home');
  }, [navigate])

  return (
    <div className={styles['header']} >
      <img
        onClick={handleClickLogo}
        className={styles['logo']}
        src={logo}
        alt='logo'
        height={140}
      />
      <Menu />
    </div>
  )
}