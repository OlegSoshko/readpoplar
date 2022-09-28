import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommentOutlined } from '@ant-design/icons';

import styles from './cardService.module.scss';


interface CardServiceProps {
  title: string;
  message: string;
  link?: string;
  icon?: React.ReactNode;
}

export const CardService: React.FC<CardServiceProps> = ({
  title,
  message,
  link,
  icon
}) => {
  const navigate = useNavigate();

  const handleClickLink = useCallback(() => {
    navigate(link!)
  }, [navigate, link])

  return (
    <div className={styles['card-service']}>
      <div className={styles['header']}>
        <span className={styles['icon']}>
          { icon || <CommentOutlined /> }
        </span>
        <h2 className={styles['title']}>{title}</h2>
      </div>
      <p className={styles['message']}>{message}</p>
      { link && <p className={styles['link']} onClick={handleClickLink}>Подробнее</p> }
    </div>
  )
}