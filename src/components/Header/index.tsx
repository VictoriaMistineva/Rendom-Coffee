import React, { useCallback, useEffect, useMemo } from 'react';
import { IconChevronLeft, IconCardstack } from '@salutejs/plasma-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import MICROPHONE_OFF from '../../assets/img/icons/microphoneOff.svg';
import MICROPHONE_ON from '../../assets/img/icons/microphoneOn.svg';
import { ReactComponent as IconSoundOff } from '../../assets/img/icons/soundOff.svg';
import { ReactComponent as IconSoundOn } from '../../assets/img/icons/soundOn.svg';
import styles from './Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import PaginationLine from '../PaginationLine';
import { getIsMicrophoneOff, getIsSoundOff, turnOffMicrophone, turnOffSound, turnOnMicrophone, turnOnSound } from '../../redux/utilsCommandName';
import { sendData } from '../../redux/assistant';
import { getStoriesPage } from '../../redux/firstStoriesPage';


interface HeaderProps {
  className?: string;
  isWeb?: boolean;

}

const Header = ({ className, isWeb }: HeaderProps) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMicrophoneOff = useSelector(getIsMicrophoneOff);
  const isSoundOff = useSelector(getIsSoundOff);
  const initialSlide = useSelector(getStoriesPage);
  
  const handleClickMicrophone = useCallback(() => {
    if (isMicrophoneOff) dispatch(turnOnMicrophone());
    else dispatch(turnOffMicrophone());

    dispatch(
      sendData({
        action_id: isMicrophoneOff ? 'MicrophoneTurnOn' : 'MicrophoneTurnOff',
      })
    );
  }, [isMicrophoneOff]);

  const handleClickSound = useCallback(() => {
    if (isSoundOff) dispatch(turnOnSound());
    else dispatch(turnOffSound());

    dispatch(
      sendData({
        action_id: isSoundOff ? 'SoundTurnOn' : 'SoundTurnOff',
      })
    );
  }, [isSoundOff]);

  const handleClickButton = () => {
    dispatch(
      sendData({
        action_id: 'Back',
      })
    );
  };

  const routingTitle = useMemo(() => {
    switch (location.pathname) {
      case '/SecondPage':
      case '/firstStories':
      case '/':
        return '';
      default:
        return 'РЭНДОМ КОФЕ В СБЕРЕ';
    }
  }, [location.pathname]);

  return (
    <header
      className={cn(
        styles.header,
        className
      )}
    >
      <div>
        <div onClick={handleClickButton}>
          <IconChevronLeft
            className={cn(styles.header__icon, {
              [styles.header__icon_close]: location.pathname === '/firstStories' || location.pathname === '/',
            })}

          />
        </div>
      </div>

      {routingTitle ? routingTitle :
        <div className={styles.header__paginationContainer}>
          {/* <PaginationLine isActive={(location.pathname === '/firstStories' && initialSlide == 0 ) || location.pathname === '/'} /> */}
          <PaginationLine isActive={location.pathname === '/firstStories' && initialSlide == 0 } />
          <PaginationLine isActive={location.pathname === '/firstStories' && initialSlide == 1} />
        </div>
      }
      {
        !isWeb ?
          <div className={styles.header__buttons}>
          <button
            onClick={handleClickMicrophone}
            className={styles.header__button}
          >
            <img src={isMicrophoneOff ? MICROPHONE_OFF : MICROPHONE_ON} />
          </button>
          <button
            onClick={handleClickSound}
            className={styles.header__button}
          >
            {isSoundOff ? <IconSoundOff /> : <IconSoundOn />}
          </button>
        </div>
        :
        <div></div>
      }
    </header>
  );
};

Header.propTypes = {};

export default React.memo(Header);