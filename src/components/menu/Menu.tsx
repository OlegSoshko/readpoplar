import React from 'react';
import { Menu as MenuAnt } from 'antd';

import styles from './menu.module.scss';
import { MENU } from './menu.constants';
import { useMenuNavigate } from './menu.hooks';


export const Menu: React.FC = () => {
  const { navigateTo } = useMenuNavigate();

  return (
    <MenuAnt className={styles['menu']} mode="horizontal">
      {
        MENU.map(({key, title, isAnchor}) => (
          <MenuAnt.Item key={key} onClick={() => navigateTo(key, isAnchor)}>
            {title}
          </MenuAnt.Item>
        ))
      }
    </MenuAnt>
  )
}

export const MenuFooter: React.FC = () => {
  const { navigateTo } = useMenuNavigate();

  return (
    <MenuAnt className={styles['menu-footer']}>
    {
      MENU.map(({key, title, isAnchor}) => (
        <MenuAnt.Item key={key} onClick={() => navigateTo(key, isAnchor)}>
          {title}
        </MenuAnt.Item>
      ))
    }
  </MenuAnt>
  )
}