import React from 'react';

import styles from './step.module.scss';


interface StepProps {
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export const Step: React.FC<StepProps> = ( {index, title, description, isLast = false }) => {
  return (
    <div className={styles['step']}>
      <div className={styles['step-block']}>
        <div className={styles['index']}>{index}</div>
        { (!isLast) && <hr className={styles['line']} /> }
      </div>
      <div className={styles['text-block']}>
        <h2 className={styles['title']}>{title}</h2>
        <p className={styles['description']}>{description}</p>
      </div>
    </div>
  )
}