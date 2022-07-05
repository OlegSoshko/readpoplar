import React from 'react';
import { Menu as MenuAnt } from 'antd';

import styles from './menu.module.scss';
import { MENU, MENU_ENUM } from './menu.constants';
import { useNavigate } from 'react-router-dom';


export const Menu: React.FC = () => {
  const navigation = useNavigate();

  const hendleClick = (route: string) => {
    navigation(route);
  }

  return (
    <MenuAnt className={styles['menu']} mode="horizontal" defaultSelectedKeys={[MENU_ENUM.SERVICES]}>
      {
        Object.entries(MENU).map(([key, label]) => (
          <MenuAnt.Item key={key} onClick={() => hendleClick(key)}>
            {label}
          </MenuAnt.Item>
        ))
      }
    </MenuAnt>
  )
}