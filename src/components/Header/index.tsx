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

interface HeaderProps {
  className?: string;
}

const Header = ({ className } : HeaderProps) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("Header historyCoun ---------- " + historyCount)


  const routingTitle = useMemo(() => {
    switch (location.pathname) {
      case '/SecondPage':
        return '2 - SecondPage';
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
        <IconChevronLeft
          className={cn(styles.header__icon, {
            [styles.header__icon_close]: false,
          })}
        />
        
      </div>
      <div>
        {routingTitle}
      </div>
      <div className={styles.header__buttons}>
          <button
                // onClick={handleClickMicrophone}
                className={styles.header__button}
              >
                {/* <img src={isMicrophoneOff ? MICROPHONE_OFF : MICROPHONE_ON} /> */}
                <img src={true ? MICROPHONE_OFF : MICROPHONE_ON} />
              </button>
              <button
                // onClick={handleClickSound}
                className={styles.header__button}
              >
                {/* {isSoundOff ? <IconSoundOff /> : <IconSoundOn />} */}
                {true ? <IconSoundOff /> : <IconSoundOn />}
          </button>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default React.memo(Header);