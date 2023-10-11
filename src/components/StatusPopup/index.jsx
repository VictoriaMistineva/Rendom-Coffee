import React from 'react';
import cn from 'classnames';
import Portal from '../Portal';
import { ReactComponent as IconSuccess } from '../../assets/img/icons/popup-success.svg';
import { ReactComponent as IconFail } from '../../assets/img/icons/popup-fail.svg';
import { ReactComponent as IconLightGreen } from '../../assets/img/icons/light-green.svg';
import { ReactComponent as IconLightRed } from '../../assets/img/icons/light-red.svg';

import styles from './StatusPopup.module.scss';

const StatusPopup = ({
  status,
  textItems,
  buttonText,
  onButtonClick,
  onClose,
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onButtonClick(e);
  };

  return (
    <Portal className={styles.statusPopup} onClick={onClose}>
      <div
        className={cn(
          styles.statusPopup__logo,
          styles[`statusPopup__logo_${status}`]
        )}
      >
        {status === 'fail' && (
          <>
            <IconFail />
            <IconLightRed className={styles.statusPopup__light} />
          </>
        )}
        {status === 'success' && (
          <>
            <IconSuccess />
          </>
        )}

        <div className={styles.statusPopup__lightContainer}>
          {status === 'fail' && (
            <IconLightRed className={styles.statusPopup__light} />
          )}
          {status === 'success' && (
            <IconLightGreen className={styles.statusPopup__light} />
          )}
        </div>
      </div>
      <div className={styles.statusPopup__textContainer}>
        {textItems.map((item) => (
          <span
            key={item}
            className={styles.statusPopup__text}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
      {buttonText &&
        <button
          className={styles.statusPopup__button}
          type="button"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      }
    </Portal>
  );
};

StatusPopup.defaultProps = {
  textItems: [],
};

export default React.memo(StatusPopup);
