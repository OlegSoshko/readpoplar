import React from 'react';

import { ContentBlock } from '../../components';

import styles from './howToOrder.module.scss';
import { HOW_TO_ORDER } from './howToOrder.constants';
import { Step } from './components';


export const HowToOrder: React.FC = () => {
  return (
    <ContentBlock
      id='how_to_make_an_order'
      className={styles['how-to-order']}
      classNameContent={styles['content']}
      title='Как сделать заказ мерча'
    >
      {
        HOW_TO_ORDER.map(({title, description}, index) => (
          <Step
            key={index}
            index={index+1}
            title={title}
            description={description}
            isLast={index === HOW_TO_ORDER.length-1}
          />
        ))
      }
    </ContentBlock>
  )
}