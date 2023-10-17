import React, { ReactNode, useCallback, useEffect, useState } from 'react';
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
import {closeActionPopup, closeAlertPopup, getActionPopup, getAlertPopup,closeHowItWorksPopUp,getHowItWorksPopUpIsOpen } from '../redux/utilsCommandName'
import StatusPopupOpacityAndIsButton from '../components/StatusPopupOpacityAndIsButton';
import HowItWorksPopUp from '../components/HowItWorksPopUp';


interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children } : LayoutProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    page,
    isBlur,
    isLoading
  } = useSelector((state : RootState) => ({
    page: getPage(state),
    isBlur: getIsBlur(state),
    isLoading: getIsLoading(state)
  }));

  const actionPopup = useSelector(getActionPopup);
  const alertPopup = useSelector(getAlertPopup);
  const howItWorksPopUpIsOpen = useSelector(getHowItWorksPopUpIsOpen);
  
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


  return (
    <div
      className={cn(styles.layout, {
        [styles.layout_blur]:
          isBlur
      })}
    >
      <Header />
      <div className={styles.layout__content}>{children}</div>
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
            isOpen = {howItWorksPopUpIsOpen}
            onClose={handleCloseHowItWorksPopUp}
          />
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
