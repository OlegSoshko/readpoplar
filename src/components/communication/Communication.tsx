import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Dropdown } from 'antd';
import { CommentOutlined, SendOutlined, WhatsAppOutlined } from '@ant-design/icons';

import styles from './communication.module.scss';


interface CommunicationProps {
  className?: string;
}

export const Communication: React.FC<CommunicationProps> = ({className}) => {
  const [visible, setvisible] = useState(false);

  const handleChangeVisible = useCallback(
    () => {
      setvisible(!visible)
    },
    [visible],
  )
  

  const overlayMenu = (
    <div className={styles['overlay-menu']}>
      <WhatsAppOutlined className={cn(styles['icon'], styles['whatsapp'])} />
      <SendOutlined className={cn(styles['icon'], styles['telegramm'])} />
    </div>
  )

  return (
    <div id='communication' className={cn(styles['communication'], className)}>
      <Dropdown 
        placement='top'
        visible={visible}
        onVisibleChange={handleChangeVisible}
        overlay={overlayMenu} 
        trigger={['click']}
        getPopupContainer={() => document.getElementById('communication')!}
      >
        <CommentOutlined className={cn(styles['icon'], styles['messengers'], visible && styles['active'])} />
      </Dropdown>
    </div>
  )
}