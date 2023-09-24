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
            className={styles.radiobox}
          />
          <Radiobox
            label="По календарю"
            className={styles.radiobox}
          />
          <div style={{paddingLeft:"31.5px",paddingBottom:"9px"}}>
            <p>Предоставить доступ</p>
          </div>
          <Radiobox label="По интересам" 
            className={styles.radiobox}
          />
        </RadioGroup>
      </div>

      <button className={cn(styles.selectionColleagues__button, styles.selectionColleagues__button_green)}>
        Искать
      </button>


    </div>
  );
};

export default SelectionColleaguesPage;


