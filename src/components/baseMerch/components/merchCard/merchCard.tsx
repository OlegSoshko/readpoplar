import React from 'react';

import styles from './merchCard.module.scss';



interface MerchCardProps {
  title: string;
  imgSrc: string;
  alt?: string;
}

export const MerchCard: React.FC<MerchCardProps> = ({title, imgSrc, alt}) => {
  return (
    <div className={styles['merch-card']}>
      <img className={styles['img']} src={imgSrc} alt={alt} height={290}/>
      <h3 className={styles['title']}>{title}</h3>
    </div>
  )
}