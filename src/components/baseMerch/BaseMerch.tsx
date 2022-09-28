import React from 'react';

import { ContentBlock } from '../../components';

import styles from './baseMerch.module.scss';
import { MERCH } from './baseMerch.constants';
import { MerchCard } from './components';


export const BaseMerch: React.FC = () => {
  return (
    <ContentBlock
      title='База для мерча'
      className={styles['base-merch']}
      classNameContent={styles['content']}
    >
      <p>
        Мы ценим ваше время, поэтому уже разработали стильные и удобные лекала, продумав каждую деталь. Остается только определиться с дизайном, и можно запускать мерч в производство.

      </p>
      {
        MERCH.map((item, index) => {
          return (
            <MerchCard
              key={index}
              title={item.title}
              alt={item.alt}
              imgSrc={item.imgSrc}
            />
          )
        })
      }
    </ContentBlock>
  )
}