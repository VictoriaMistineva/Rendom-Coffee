import React from 'react';
import PopupSheet from '../PopupSheet';
import { ReactComponent as IconNote } from '../../assets/img/icons/meet-note.svg';
import { ReactComponent as IconClock } from '../../assets/img/icons/clock.svg';
import { ReactComponent as IconWarning } from '../../assets/img/icons/err.svg';
import styles from './AlertPopup.module.scss';
import { IconChevronRight } from '@salutejs/plasma-icons';

const AlertPopup = ({
  isOpen,
  inset,
  title,
  subtitle,
  onClose,
  closeCanvas,
}) => {

  React.useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 5000)

  }, []);

  return (
    <PopupSheet isOpen={isOpen} onPlaceholderClick={() => {
      onClose();
    }}
      onClick={() => {
        onClose();
      }}
      onSwipe={onClose}
    >
      <div
        className={styles.connectionListPopup__content}
        style={{ paddingBottom: inset }}
      >
        <div className={styles.connectionListPopup__iconContainer}>
          <IconWarning />
        </div>
        <h5
          className={styles.connectionListPopup__title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <h5
          className={styles.connectionListPopup__subtitle}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      </div>
    </PopupSheet>
  );
}

AlertPopup.defaultProps = {
  onClickMeet: () => { },
  onClose: () => { },
};

export default React.memo(AlertPopup);
