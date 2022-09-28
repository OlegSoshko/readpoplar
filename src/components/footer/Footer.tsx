import React from "react";

import { MenuFooter, ContactsFooter } from '../../components';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles['footer']}>
      <div className={styles['content']}>
        <MenuFooter />
        <ContactsFooter />
      </div>
    </div>
  )
}