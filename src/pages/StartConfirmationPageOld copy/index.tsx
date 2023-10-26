import React, { ChangeEvent } from 'react';
import styles from './StartConfirmationPage.module.scss'
import cn from 'classnames';
import { ReactComponent as Illustration } from '../../assets/img/icons/Illustration.svg';
import { Checkbox } from '@salutejs/plasma-ui';
import { RootState } from '../../redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sendData, setPage } from '../../redux/assistant';
import { getAccess, getCheckboxAccess } from '../../redux/firstStoriesPage';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import secondPageStyles from '../SecondStoriesPage/SecondStoriesPage.module.scss'
import "./swiper-custom.scss"
// Import Swiper styles
import 'swiper/css';

const StartConfirmationPage = () => {
  const dispatch = useDispatch();

  const checkboxAccess = useSelector(getCheckboxAccess);
  const access = useSelector(getAccess);

  // After switching slides to Mock, the page will be loaded (Please check out that content of mock and real pages are the same)
  const handleSlideChange = () => {
    const page = "/SecondPage"
    dispatch(setPage({ page }))
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
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={handleSlideChange}
      loop={true}
    >

      <SwiperSlide>

        <div className={styles.startConfirmation}>
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
            onClick={handleClickButton}
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
                onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }}
              />
            </div>
          }
        </div >
      </SwiperSlide>

      {/* Mock Page Slide - will be shown while real page loads */}
      <SwiperSlide>
        <div className={secondPageStyles.secondStories}>
          <div className={secondPageStyles.secondStories__container}>
            <div className={secondPageStyles.secondStories__title}>
              К дню рождения <br />Сбера
            </div>
            <div className={secondPageStyles.secondStories__title}>
              Мы запускаем <br />РЭНДОМ КОФЕ
            </div>
            <div className={secondPageStyles.secondStories__title}>
              Расширьте свой<br />круг интересных<br />знакомств
            </div>
          </div>
          <div className={secondPageStyles.secondStories__buttonContainer}>
            <button
              className={cn(secondPageStyles.secondStories__button, secondPageStyles.secondStories__button_green)}
            >
              Участвовать
            </button>
            <button
              className={cn(secondPageStyles.secondStories__button, secondPageStyles.secondStories__button_white)}
            >
              Как это работает
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default StartConfirmationPage;


