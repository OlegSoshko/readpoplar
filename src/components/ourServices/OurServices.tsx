import React from 'react';
import { MacCommandOutlined, PrinterOutlined, SkinOutlined } from '@ant-design/icons';

import { ContentBlock } from '../../components';

import { CardService } from './components';
import styles from './ourServices.module.scss';


export const OurServices: React.FC = () => {
  return (
    <ContentBlock title='Наши услуги' id='services'>
      <div className={styles['our-services']}>
        <CardService
          title='Пошив'
          icon={<SkinOutlined />}
          message='Собственное производство позволяет реализовывать проекты любого объема в сжатые сроки.'
          link='/'
        />
        <CardService
          title='Печать'
          icon={<PrinterOutlined />}
          message='Прямая печать методом шелкографии позволяет перенести на изделие любую вашу идею.'
          link='/'
        />
        <CardService
          title='Вышивка'
          icon={<MacCommandOutlined />}
          message='Машинная вышивка позволяет добиться высокой прочности и износостойкости изображения.'
          link='/'
        />
      </div>
    </ContentBlock>
  )
}