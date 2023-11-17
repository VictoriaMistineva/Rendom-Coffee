import React from 'react';
import styles from './SecondStoriesPage.module.scss'
import cn from 'classnames';
import { ReactComponent as Illustration } from '../../assets/img/icons/Illustration.svg';
import { Checkbox } from '@salutejs/plasma-ui';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { finishIsLoading, sendData, setPage } from '../../redux/assistant';
import { getAccess, getCheckboxAccess, getStoriesPage } from '../../redux/firstStoriesPage';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import firstPageStyle from './StartConfirmationPage.module.scss'
import "./swiper-custom.scss"
// Import Swiper styles
import 'swiper/css';

const SecondStoriesPage = () => {
  const dispatch = useDispatch();
  const slidesPerView = useSelector(getStoriesPage);
  // After switching slides to Mock, the page will be loaded (Please check out that content of mock and real pages are the same)
  const handleSlideChange = () => {
    const page = "/firstStories"
    dispatch(setPage({ page }));

    dispatch(
      sendData({
        action_id: 'changeStories',
        parameters: { "page": (slidesPerView === 1) ? 0 : 1 }
      })
    );

    dispatch(finishIsLoading())
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
            <div className={styles.secondStories__containerTitle}>
              <div className={styles.secondStories__title}>
                Ко дню рождения  <br /><strong>Сбербанка</strong><br />мы запускаем внутренний <br />сервис для интересных<br />знакомств
              </div>
              <div className={styles.secondStories__title}>
                Давайте расширять круг <br />своего общения <br /> и знакомиться с коллегами <br /> из других подразделений.
              </div>
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
        <div className={cn(firstPageStyle.startConfirmation)}>
          <div>
            <div className={styles.startConfirmation__title}>
              РАНДОМ-КОФЕ<br />В СБЕРЕ
            </div>
            <div>
              <Illustration />
            </div>
          </div>
        <button
          className={cn(firstPageStyle.startConfirmation__button, firstPageStyle.startConfirmation__button_green)}
          onClick={handleClickButton}
        >
          Участвовать
        </button>
      </div >
    </SwiperSlide>
      
    </Swiper >
  );
};

export default SecondStoriesPage;


