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

        <h5
          className={styles.connectionListPopup__title}
        >
          Вы и другие сотрудники<br />
          подтверждаете готовность<br />
          к участию в рандом-кофе.<br />
          Для встречи за кофе выберите вариант, который вам больше нравится:
        </h5>

        <div className={styles.connectionListPopup__contentText} >
          <ul>
            <li className={styles.li} style={{ listStyleType: 'disc' }}>Доверюсь судьбе: выбор собеседника будет случайным.</li>
            <li className={styles.li} style={{ listStyleType: 'disc' }}>По календарю: виртуальный помощник  подберёт собеседника из тех, кто работает в вашем офисе и доступен тогда же, когда и вы.</li>
            <li className={styles.li} style={{ listStyleType: 'disc' }}>По интересам: виртуальный помощник найдёт коллегу с похожими увлечениями.</li>
          </ul>
        </div>

        <h5
          className={styles.connectionListPopup__subtitle}
        >
          Если предложение вам подходит,<br />
          ассистент выставит встречу<br />
          в календарь всем участникам<br />
        </h5>

      </div>
    </PopupSheet>
  );
}

HowItWorksPopup.defaultProps = {
  onClickMeet: () => { },
  onClose: () => { },
};

export default React.memo(HowItWorksPopup);
