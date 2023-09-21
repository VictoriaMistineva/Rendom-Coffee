import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SelectionInterestPage.module.scss'
import cn from 'classnames';



const SelectionInterestPage = () => {
  return (
    <div className={styles.selectionInterest}>
      <div className={styles.selectionInterest__container}>
        <div className={styles.selectionInterest__title}>
          Выберите интересы<br></br> из списка <br></br>или добавьте свой
        </div>
        <div className={styles.selectionInterest__subTitle}>
          Подборка создается с учетом вашей роли,<br></br> графика и времени дня
        </div>
      </div>
      <button
        className={cn(styles.selectionInterest__button, styles.selectionInterest__button_green)}>
        Искать
      </button>
    </div>
  );
};

export default SelectionInterestPage;


