import React from 'react';

import styles from './cardIntention.module.scss';


interface CardIntentionProps {
  title: string;
  description: string;
}

export const CardIntention: React.FC<CardIntentionProps> = ({title, description}) => {
  return (
    <div className={styles['card-intention']}>
      <h2 className={styles['title']}>{title}</h2>
      <p className={styles['description']}>{description}</p>
    </div>
  )
}