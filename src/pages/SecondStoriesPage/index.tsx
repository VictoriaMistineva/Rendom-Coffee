import React from 'react';
import styles from './SecondStoriesPage.module.scss'
import cn from 'classnames';
import { ReactComponent as Illustration } from '../../assets/img/icons/Illustration.svg';
import { Checkbox } from '@salutejs/plasma-ui';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sendData, setPage } from '../../redux/assistant';
import { getAccess, getCheckboxAccess } from '../../redux/firstStoriesPage';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import firstPageStyles from '../StartConfirmationPage/StartConfirmationPage.module.scss'
import "./swiper-custom.scss"
// Import Swiper styles
import 'swiper/css';

const SecondStoriesPage = () => {
  const dispatch = useDispatch();

  // After switching slides to Mock, the page will be loaded (Please check out that content of mock and real pages are the same)
  const handleSlideChange = () => {
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
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={handleSlideChange}
      loop={true}
    >
      <SwiperSlide>
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
      </SwiperSlide>

      {/* Mock Page Slide - will be shown while real page loads */}
      <SwiperSlide>
      <div className={firstPageStyles.startConfirmation}>
          <div className={firstPageStyles.startConfirmation__container}>
            <div>
              <div className={firstPageStyles.startConfirmation__title}>
                РЭНДОМ<br />КОФЕ <br />В СБЕРЕ
              </div>
              <div>
                <Illustration />
              </div>
            </div>
          </div>
          <button
            className={cn(firstPageStyles.startConfirmation__button, firstPageStyles.startConfirmation__button_green)}
          >
            Участвовать
          </button>
        </div >
      </SwiperSlide>
      
    </Swiper>
  );
};

export default SecondStoriesPage;


