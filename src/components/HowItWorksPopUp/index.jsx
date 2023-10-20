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
          к участию в рэндом кофе.<br />
          Далее выбираете, как рекомендовать вам коллегу для встречи
        </h5>

        <div className={styles.connectionListPopup__contentText} >
          <ul>
            <li className={styles.li} style={{ listStyleType: 'disc' }}>Доверюсь судьбе - рандомный выбор</li>
            <li className={styles.li} style={{ listStyleType: 'disc' }}>По календарю - ассистент найдет коллег на вашей площадке, с которыми у вас есть ближайшее общее свободное время в календаре</li>
            <li className={styles.li} style={{ listStyleType: 'disc' }}>По интересам - ассистент сопоставит интересы и предложит коллегу с похожим запросом</li>
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
