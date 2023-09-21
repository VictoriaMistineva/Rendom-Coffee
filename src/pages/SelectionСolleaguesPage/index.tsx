import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SelectionСolleaguesPage.module.scss'
import cn from 'classnames';
import { Radiobox, RadioGroup } from '@salutejs/plasma-ui';


const SelectionColleaguesPage = () => {
  return (
    <div className={styles.selectionColleagues}>
      <div className={styles.selectionColleagues__container}>
        <div className={styles.selectionColleagues__title}>
          Я подберу для вас<br></br> коллег, с которыми <br></br> вы еще не знакомы
        </div>
      </div>
      <div className={styles.selectionColleagues__radioGroupContainer}>
        <RadioGroup >
          <Radiobox
            label="Доверюсь судьбе"
          />
          <Radiobox
            label="По календарю"
            description="Предоставить доступ"
          />
          <Radiobox label="По интересам" />
        </RadioGroup>
      </div>

      <button className={cn(styles.selectionColleagues__button, styles.selectionColleagues__button_green)}>
        Искать
      </button>


    </div>
  );
};

export default SelectionColleaguesPage;


