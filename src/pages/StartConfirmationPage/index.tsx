import React, { ChangeEvent } from 'react';
import styles from './StartConfirmationPage.module.scss'
import cn from 'classnames';
import { ReactComponent as Illustration } from '../../assets/img/icons/Illustration.svg';
import { Checkbox } from '@salutejs/plasma-ui';
import { RootState } from '../../redux';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { sendData,setPage} from '../../redux/assistant';
import { getAccess, getCheckboxAccess } from '../../redux/firstStoriesPage';

const StartConfirmationPage = () => {
  const dispatch = useDispatch();

  const checkboxAccess = useSelector(getCheckboxAccess);
  const access = useSelector(getAccess);
  const handle = () => {
    const page = "/SecondPage"
    dispatch(setPage({page}))
  };
  const handleClickButton = () => {
    dispatch(
      sendData({
        action_id: 'clickParticipate',
      })
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      sendData({
        action_id: 'calendarPickerChange',
        parameters: event.target.checked,
      })
    );
  };
  
  return (
    <div className={styles.startConfirmation} >
      <div className={styles.startConfirmation__container}>
        <div>
          <div className={styles.startConfirmation__title}>
            РЭНДОМ<br />КОФЕ <br />В СБЕРЕ
          </div>
          <div>
            <Illustration />
          </div>
        </div>
      </div>
      <button
        className={cn(styles.startConfirmation__button, styles.startConfirmation__button_green)}
        onClick = {handleClickButton}
        >
      Участвовать
    </button>
      {
        !access &&
          <div className={styles.startConfirmation__buttonContainer}>
            <Checkbox 
            label={
              <div>
                Предоставить ассистенту доступ к<br />календарю для подбора<br />
                удобного времени встречи
              </div>
            }
            checked={checkboxAccess}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {handleChange(event)}}
            />
          </div>
      }
    </div >
  );
};

export default StartConfirmationPage;


