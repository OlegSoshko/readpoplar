import React, { useCallback } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import notFound from '../../images/not-found.png';

import styles from './notFoundPage.module.scss';  


export const NotFoundPage: React.FC = () => {

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate('/');
  }, [navigate])

  return (
    <div className={styles['not-found-page']} >
      <div className={styles['content']}>
        <div>
          <img src={notFound}  alt='not found' height={400}/>
        </div>
        <div className={styles['description']}>
          <h1 className={styles['title']}>404</h1>
          <h2>Страница не найдена</h2>
          <p className={styles['message']}>
            Мы сожалейм. 
            <br />
            Страница, которую вы запросили, не найдена.
            <br />
            Пожалуйста вернитемь на главную страницу.
          </p>
          <Button 
            type='primary' 
            className={styles['go-home']} 
            onClick={handleClick}
          >На главную</Button>
        </div>
      </div>
    </div>
  )
}