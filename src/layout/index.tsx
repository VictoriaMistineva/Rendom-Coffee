import React, { ReactNode, useCallback, useEffect } from 'react';
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
} from '../redux/assistant';
import {
  getIsBlur,
} from '../redux/app';

import styles from './Layout.module.scss';
import { RootState } from '../redux';

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

  useEffect(() => {
    // @ts-ignore
    dispatch(initAssistant());
  }, [dispatch]);

  useEffect(() => {
    const pageWithoutSearch = page.split('?')[0];
    if (location.pathname !== pageWithoutSearch) navigate(`${page}`);
  }, [page]);

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
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
