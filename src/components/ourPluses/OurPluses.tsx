import React from 'react';
import { BgColorsOutlined, ScissorOutlined, SketchOutlined, SkinOutlined } from '@ant-design/icons';

import { ContentBlock } from '../../components';

import { CardPluse } from './components';
import styles from './ourPluses.module.scss';


export const OurPluses: React.FC = () => {
  return (
    <ContentBlock title='Наши преимущества' className={styles['our-pluses-block']}>
      <div className={styles['our-pluses']}>
        <CardPluse
          title='Собственное производство'
          icon={<ScissorOutlined />}
          description='Изготавливаем одежду на собственном производстве, оснащенном современным швейным оборудованием.'
        />
        <CardPluse
          title='Образцы'
          icon={<SkinOutlined />}
          description='Мы высылаем образец изделия перед запуском в производство.'
        />
        <CardPluse
          title='Широкая линейка цветов'
          icon={<BgColorsOutlined />}
          description='Подберем необходимый цвет трикотажного полотна исходя из ваших потребностей.'
        />
        <CardPluse
          title='Качество'
          icon={<SketchOutlined />}
          description='Мы сотрудничаем с проверенными поставщиками тканей. Контролируем весь процесс от идеи до производства мерча.'
        />
      </div>
    </ContentBlock>
  )
}