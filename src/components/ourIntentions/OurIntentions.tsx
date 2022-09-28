import React from 'react';

import { ContentBlock } from '../../components';

import { INTENTIONS } from './cardIntentions.constants';
import { CardIntention } from './components';
import styles from './ourIntentions.module.scss';


export const OurIntentions: React.FC = () => {
  return (
    <ContentBlock
      className={styles['our-intentions']}
      classNameContent={styles['content']}
      title='Мы создаем мерч, который помогает реализовать скрытый потенциал бренда и решает бизнес-задачи:'
    >
      {
        INTENTIONS.map(({title, description}, index) => (
          <CardIntention key={index} title={title} description={description} />
        ))
      }
    </ContentBlock>
  )
}