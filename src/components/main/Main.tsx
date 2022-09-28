import React from 'react';

import styles from './main.module.scss';

export const Main: React.FC = () => {
  return (
    <article className={styles['main']}>
      <div className={styles['left-block']}>
        <h1 className={styles['title']}>Создаём <br /> корпоративный <br /> мерч</h1>
        <p className={styles['description']}>Изготовим вещь с любым принтом для вашего бизнеса. <br /> От идеи до производства и доставки.</p>
      </div>
      {/* <img src={mainFoto} alt='foto' /> */}
      <div className={styles['image']}/>
    </article>
  )
}