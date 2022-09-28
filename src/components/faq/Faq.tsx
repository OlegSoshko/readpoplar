import React from 'react';
import { Collapse } from 'antd';

import styles from './faq.module.scss';
import { faqList } from './faq.constants';


export const Faq: React.FC = () => {
  return (
    <article id='faq' className={styles['faq']}>
      <div className={styles['content']}>
        <h1 className={styles['title']}>FAQ</h1>
        <Collapse
          ghost
          expandIconPosition='end'
        >
          {
            faqList.map((item, index) => (
              <Collapse.Panel className={styles['collapse']} header={item.title} key={index}>
                <p className={styles['description']}>{item.description}</p>
              </Collapse.Panel>
            ))
          }
        </Collapse>
      </div>
    </article>
  )
}