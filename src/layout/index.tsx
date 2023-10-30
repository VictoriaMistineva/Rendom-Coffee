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
  close
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
  const [isWeb, setIsWeb] = useState<boolean>(false);
  const [isBgCat, setIsBgCat] = useState<boolean>(false);
  const [isBgCat2, setIsBgCat2] = useState<boolean>(false);

  useEffect(() => {
    // @ts-ignore
    dispatch(initAssistant());
  }, [dispatch]);

  useEffect(() => {
    const pageWithoutSearch = page.split('?')[0];
    if (location.pathname !== pageWithoutSearch) navigate(`${page}`);
  }, [page]);

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
      case '/sberTopQrStoriasPage':
        setIsWeb(true);
        break
      case '/':
        setIsBgCat2(false);
        setIsBgCat(true);
        break;
      case '/firstStories':
        setIsBgCat2(false);
        setIsBgCat(true);
        break;
      case '/secondStories':
        setIsBgCat(false);
        setIsBgCat2(true);
        break
      default:
        setIsWeb(false);
        setIsBgCat(false);
        setIsBgCat2(false)
        break
    }
  }, [location.pathname])

  return (
    <div className={cn(!isWeb ? styles.contentlayout : styles.container)}>
      <div
        className={cn(isWeb ? styles.layoutWeb : styles.layout, {
          [styles.layout_blur]:
            isBlur, [styles.layout__cat]:
            isBgCat, [styles.layout__cat2]:
            isBgCat2
        })}
      >
        <Header isWeb={isWeb} />
        {/* <img  className={styles.layout__catImg} src={ AVATAR } alt="cat" /> */}
        <div className={isWeb ? styles.layoutWeb__content : styles.layout__content}>{children}</div>
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
            subTitle={alertPopup.subTitle}
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
