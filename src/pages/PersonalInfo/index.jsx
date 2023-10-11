import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import ICON_CONTACT from '../../assets/img/icons/contact.svg';
import ICON_PRESENT from '../../assets/img/icons/present.svg';
import styles from './PersonalInfo.module.scss';
import { sendData } from '../../redux/assistant';
import { getUsers, getAvatar, getTeams } from '../../redux/smallUserCard';

const PersonalInfo = () => {
  const users = useSelector(getUsers);
  const avatar = useSelector(getAvatar);
  const teams = useSelector(getTeams);
  const dispatch = useDispatch();
  const handleClickButton = () => {
    dispatch(
      sendData({
        action_id: 'clickOfferMeetingButton',
      })
    );
  };

  return (
    <div className={styles.organizerMeet}>
      <div className={styles.organizerMeet__statusInfo}>
        <div className={styles.organizerMeet__avatar}>
          {!avatar ? (
            <img
              className={styles.organizerMeet__avatarIcon}
              src={ICON_CONTACT}
              alt="Аватарка"
            />
          ) : (
            <img
              className={cn(
                styles.organizerMeet__avatarIcon,
                styles.organizerMeet__avatarIcon_img
              )}
              src={avatar}
              alt="Avatar"
            />
          )}
        </div>
        <div className={styles.organizerMeet__statusInfoColumn}>
          <h4 className={styles.organizerMeet__title}>
            {`${users.fullName}`}
          </h4>
          <span className={styles.organizerMeet__subTitle}>{users.position}</span>
          <br></br>
          <span
            className={styles.organizerMeet__subTitle}
          >{`${users.department}`}</span>
          <br></br>
          <span
            className={cn(styles.organizerMeet__status, {
              [styles.organizerMeet__status_nodata]: users.isBusy === undefined,
              [styles.organizerMeet__status_busy]: users.isBusy === true,
              [styles.organizerMeet__status_free]: users.isBusy === false,
            })}
          >
            По календарю -{' '}
            {users.isBusy === undefined
              ? 'нет данных'
              : users.isBusy
                ? ' на встрече'
                : ' встреч нет'}
          </span>
          <br></br>
          {users.birthdayToday && (
            <span className={styles.organizerMeet__birthday}>
              <img
                src={ICON_PRESENT}
                className={styles.organizerMeet__birthdayIcon}
              />
              Сегодня празднует свой день рождения
            </span>
          )}
        </div>
      </div>
      <div>
        <span className={styles.organizerMeet__titleGroup}>Контакты</span>
        <div className={styles.organizerMeet__section}>
          <span className={styles.organizerMeet__subTitle}>Мобильный номер</span>
          <br></br>
          <span className={styles.organizerMeet__contactInfo}>{users.phoneMobile}</span>
        </div>
        <div className={styles.organizerMeet__section}>
          <span className={styles.organizerMeet__subTitle}>Внутрениий номер</span>
          <br></br>
          <span className={styles.organizerMeet__contactInfo}>{users.phoneInner}</span>
        </div>
        <div className={styles.organizerMeet__section}>
          <span className={styles.organizerMeet__subTitle}>Внешняя почта</span>
          <br></br>
          <span className={styles.organizerMeet__contactInfo}>{users.emailExternal}</span>
        </div>
        <div className={styles.organizerMeet__section}>
          <span className={styles.organizerMeet__subTitle}>Внутренняя почта</span>
          <br></br>
          <span className={styles.organizerMeet__contactInfo}>{users.emailInternal}</span>
        </div>
        {teams.length !== 0 && (
          <div className={styles.organizerMeet__section}>
            <span className={styles.organizerMeet__subTitleMidge}>Команды</span>
            {teams.map((el, index) => (
              <>
                <br></br>
                <span key={index} className={styles.organizerMeet__contactInfo}>
                  {el.deptName}
                </span>
              </>
            ))}
          </div >
        )}
      </div>
      <div className={styles.organizerMeet__textMeeting} onClick={handleClickButton}>
        Предложить встречу
      </div>
    </div>
  );
};

export default PersonalInfo;
