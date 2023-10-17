import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import Portal from '../Portal';

import styles from './PopupSheet.module.scss';
import useSwipe from '../../assets/scripts/useSwipe';

const PopupSheet = ({
  isOpen,
  children,
  onPlaceholderClick,
  contentClassName,
  placeholderClassName,
  onSwipe,
  onClick,
}) => {
  const isFirstOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen) isFirstOpenRef.current = true;
  }, [isOpen]);

  useSwipe(onSwipe, {
    isActive: isOpen,
  });

  return (
    <Portal className={styles.popupSheet}>
      {isOpen && (
        <div
          onClick={onPlaceholderClick}
          className={cn(styles.popupSheet__placeholder, placeholderClassName)}
        />
      )}
      <div
        className={cn(contentClassName, styles.popupSheet__content, {
          [styles.popupSheet__content_open]: isOpen,
          [styles.popupSheet__content_close]: !isOpen && isFirstOpenRef.current,
        })}
        onClick={onClick}
      >
        {children}
      </div>
    </Portal>
  );
};

PopupSheet.defaultProps = {
  onPlaceholderClick: () => {},
  onSwipe: () => {},
};

export default PopupSheet;
