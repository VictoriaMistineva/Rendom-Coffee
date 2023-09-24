import React from 'react';
import { useSelector } from 'react-redux';
import styles from './StartConfirmationPage.module.scss'
import cn from 'classnames';
import { ReactComponent as Illustration } from '../../assets/img/icons/Illustration.svg';
import { Checkbox } from '@salutejs/plasma-ui';

const StartConfirmationPage = () => {
  return (
    <div className={styles.startConfirmation}>
      <div className={styles.startConfirmation__container}>
        <div className={styles.startConfirmation__title}>
          РЭНДОМ<br />КОФЕ <br />В СБЕРЕ
        </div>
        <div>
          <Illustration />
        </div>
      </div>


      <button
        className={cn(styles.startConfirmation__button, styles.startConfirmation__button_green)}>
        Участвовать
      </button>
      <div className={styles.startConfirmation__buttonContainer}>
        <Checkbox label={
          <div>
            Предоставить ассистенту доступ к<br />календарю для подбора<br />
            удобного времени встречи
          </div>
        }
          defaultChecked />
      </div>
    </div>
  );
};

export default StartConfirmationPage;


