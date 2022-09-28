import React, { useCallback, useEffect, useRef } from 'react';
import { UpOutlined } from '@ant-design/icons';

import styles from './arrowUpPage.module.scss';


export const ArrowUpPage: React.FC = () => {
  const arrowRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    checkVisibleArrow();
    window.addEventListener('scroll', checkVisibleArrow);

    return () => {
      window.removeEventListener('scroll', checkVisibleArrow);
    }

  }, []);

  const checkVisibleArrow = () => {
    const arrowIsVisible = arrowRef.current?.classList.contains(styles['active']);

    if(arrowIsVisible && window.scrollY < 200) {
      arrowRef.current?.classList.remove(styles['active']);
    }

    if(!arrowIsVisible && window.scrollY > 200) {
      arrowRef.current?.classList.add(styles['active']);
    }
  }

  const handleClick = useCallback(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  return (
    <UpOutlined
      className={styles['arrow']}
      onClick={handleClick}
      ref={arrowRef}
    />
  )
}