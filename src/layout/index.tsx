import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Spinner } from '@salutejs/plasma-ui';
import Header from '../components/Header';
import Portal from '../components/Portal';
import {
  getIsLoading,
  getPage,
  initAssistant,
  sendData,
  close,
  getIsMobile,
  setIsMobile,
  finishIsLoading,
} from '../redux/assistant';
import {
  getIsBlur,
} from '../redux/app';

import styles from './Layout.module.scss';
import { RootState } from '../redux';
import AlertPopup from '../components/AlertPopup';
import StatusPopup from '../components/StatusPopup';
import { closeActionPopup, closeAlertPopup, getActionPopup, getAlertPopup, closeHowItWorksPopUp, getHowItWorksPopUpIsOpen } from '../redux/utilsCommandName'
import StatusPopupOpacityAndIsButton from '../components/StatusPopupOpacityAndIsButton';
import HowItWorksPopUp from '../components/HowItWorksPopUp';
import { getIsMicrophoneOff, getIsSoundOff, turnOffMicrophone, turnOffSound, turnOnMicrophone, turnOnSound } from '../redux/utilsCommandName';
import AVATAR from './cat.png';
import MicrophoneWeb from '../components/MicrophoneWeb';


interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    page,
    isBlur,
    isLoading
  } = useSelector((state: RootState) => ({
    page: getPage(state),
    isBlur: getIsBlur(state),
    isLoading: getIsLoading(state)
  }));


  const actionPopup = useSelector(getActionPopup);
  const alertPopup = useSelector(getAlertPopup);
  const howItWorksPopUpIsOpen = useSelector(getHowItWorksPopUpIsOpen);
  // const [isWeb, setIsWeb] = useState<boolean>(false);
  const [isWin, setWin] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [containerBackgroundClassName, setContainerBackgroundClassName] = useState<string>("backgroundDefault");
  const isMobile = useSelector(getIsMobile);

  useEffect(() => {
    // @ts-ignore
    dispatch(initAssistant());
  }, [dispatch]);

  useEffect(() => {
    const pageWithoutSearch = page.split('?')[0];
    if (location.pathname !== pageWithoutSearch) navigate(`${page}`);
  }, [page]);

  

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    if (width < 1200) {
      dispatch(setIsMobile(true));
    } else {
      dispatch(setIsMobile(false));
    }
  }, [width]);

  
  const handleCloseActionPopup = useCallback(() => {
    dispatch(closeActionPopup());
  }, []);

  const handleCloseAlertPopup = useCallback(() => {
    dispatch(closeAlertPopup());
  }, []);

  const handleCloseHowItWorksPopUp = useCallback(() => {
    dispatch(closeHowItWorksPopUp());
  }, []);

  const bgCup = useMemo(() => {
    switch (location.pathname) {
      case '/winnerPage':
        setContainerBackgroundClassName("backgroundWin");
        break
      case '/searchResult':
        setContainerBackgroundClassName("backgroundAnimationSpin");
        break
      case '/determineWinnerPage':
        setContainerBackgroundClassName("backgroundDetermineWinner");
        break
      default:
        setContainerBackgroundClassName("backgroundDefault");
        break
    }
  }, [location.pathname])



  return (
    <div className={cn(styles.container, isMobile ? styles["backgroundDefault"] : styles[containerBackgroundClassName])}>
      {!isMobile &&
        <div className={styles.nativePanel}>
        </div>
      }
      <div
        className={cn(styles.layoutWeb, {
          [styles.layout_blur]:
            isBlur
        })}
      >
        <Header isWeb={!isMobile} />
        {!isMobile && <MicrophoneWeb/>}
        <div className={!isMobile ? styles.layoutWeb__content : styles.layout__content}>{children}</div>
        {isLoading && (
          <Portal className={styles.layout__spinerContainer}>
            <Spinner size={128} />
          </Portal>
        )}
        {alertPopup.isShow &&
          <AlertPopup
            isOpen={alertPopup.isShow}
            inset={[]}
            title={alertPopup.title}
            subtitle={alertPopup.subtitle}
            onClose={handleCloseAlertPopup}
            closeCanvas={() => {
              dispatch(close());
            }}
          />
        }
        {actionPopup.isOpen && (
          <StatusPopupOpacityAndIsButton
            status={actionPopup.status}
            textItems={actionPopup.textItems}
            buttonText={actionPopup.buttonText}
            onClose={handleCloseActionPopup}
          />
        )}
        {howItWorksPopUpIsOpen && (
          <HowItWorksPopUp
            isOpen={howItWorksPopUpIsOpen}
            onClose={handleCloseHowItWorksPopUp}
          />
        )}
      </div>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
