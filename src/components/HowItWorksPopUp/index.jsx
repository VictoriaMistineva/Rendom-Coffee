import React from 'react';
import PopupSheet from '../PopupSheet';
import { ReactComponent as IconNote } from '../../assets/img/icons/meet-note.svg';
import { ReactComponent as IconClock } from '../../assets/img/icons/clock.svg';
import { ReactComponent as IconWarning } from '../../assets/img/icons/err.svg';
import styles from './HowItWorksPopup.module.scss';
import { IconChevronRight } from '@salutejs/plasma-icons';

const HowItWorksPopup = ({
  isOpen,
  onClose,
}) => {

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
      >
        {/* <div className={styles.connectionListPopup__iconContainer}>
          <IconWarning />
        </div>
        <h5
          className={styles.connectionListPopup__title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <h5
          className={styles.connectionListPopup__subtitle}
          dangerouslySetInnerHTML={{ __html: subTitle }}
        /> */}
      </div>
    </PopupSheet>
  );
}

HowItWorksPopup.defaultProps = {
  onClickMeet: () => { },
  onClose: () => { },
};

export default React.memo(HowItWorksPopup);
