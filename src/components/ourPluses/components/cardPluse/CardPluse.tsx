import React from 'react';
import { CommentOutlined } from '@ant-design/icons';

import styles from './cardPluse.module.scss';


interface CardPluseProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const CardPluse: React.FC<CardPluseProps> = ({title, description, icon}) => {
  return (
    <div className={styles['card-pluse']}>
      <span className={styles['icon']}>
        { icon || <CommentOutlined />}
      </span>
      <div className={styles['message']}>
        <h2 className={styles['title']}>{title}</h2>
        <p className={styles['description']}>{description}</p>
      </div>
    </div>
  )
}