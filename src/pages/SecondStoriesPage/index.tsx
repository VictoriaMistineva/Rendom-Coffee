import React from 'react';
import styles from './SecondStoriesPage.module.scss'
import cn from 'classnames';
import { ReactComponent as Illustration } from '../../assets/img/icons/Illustration.svg';
import { Checkbox } from '@salutejs/plasma-ui';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sendData, setPage } from '../../redux/assistant';
import { getAccess, getCheckboxAccess } from '../../redux/firstStoriesPage';

const SecondStoriesPage = () => {
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(
      sendData({
        action_id: 'FirstStories',
      })
    );
    const page = "/firstStories"
    dispatch(setPage({ page }))
  };
  const handleClickPopUp = () => {
    dispatch(
      sendData({
        action_id: 'clickParticipateClickPopUp',
      })
    );
  };

  const handleClickButton = () => {
    dispatch(
      sendData({
        action_id: 'clickParticipate',
      })
    );
  };

  return (
    <div className={styles.secondStories}>
      <div className={styles.secondStories__container}>
          <div className={styles.secondStories__title}>
            К дню рождения <br />Сбера
          </div>
          <div className={styles.secondStories__title}>
            Мы запускаем <br />РЭНДОМ КОФЕ
          </div>
          <div className={styles.secondStories__title}>
            Расширьте свой<br />круг интересных<br />знакомств
          </div>
      </div>
      <div className={styles.secondStories__buttonContainer}>
        <button
          className={cn(styles.secondStories__button, styles.secondStories__button_green)}
          onClick={handleClickButton}
        >
          Участвовать
        </button>
        <button
          className={cn(styles.secondStories__button, styles.secondStories__button_white)}
          onClick={handleClickPopUp}
        >
          Как это работает
        </button>
      </div>
    </div>
  );
};

export default SecondStoriesPage;


