import React from 'react';
import cn from 'classnames';

import styles from './contentBlock.module.scss';


interface ContentBlockProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  classNameContent?: string;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({id, title, className, classNameContent, children}) => {
  return (
    <article id={id} className={cn(styles['content-block'], className)}>
      <h1 className={styles['title']}>{title}</h1>
      <div className={cn(styles['content'], classNameContent)}>
        {children}
      </div>
    </article>
  )
}