/* eslint-disable */
import React, { useCallback, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { IconChevronLeft } from '@salutejs/plasma-icons';
import { ReactComponent as IconClock } from '../../assets/img/icons/clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icons/person.svg';
import { ReactComponent as IconNotAccepted } from '../../assets/img/icons/ne_priniato.svg';
import { ReactComponent as IconAccepted } from '../../assets/img/icons/soglasovano.svg';
import { ReactComponent as IconQuestion } from '../../assets/img/icons/pod_voprosom.svg';
import { ReactComponent as IconParticipants } from '../../assets/img/icons/uchastniki.svg';
import { ReactComponent as IconConflict } from '../../assets/img/icons/peresechenie.svg';
import { ReactComponent as IconHouse } from '../../assets/img/icons/house.svg';
import { ReactComponent as IconTach } from '../../assets/img/icons/tach.svg';
import { ReactComponent as IconEarth } from '../../assets/img/icons/earth.svg';
import { ReactComponent as IconBell } from '../../assets/img/icons/bell.svg';
import { getDateMeetInfo } from '../../assets/scripts/date';
import { getAttendees, getMeetInfo } from './../../redux/meetInfo'
import styles from './MeetingPage.module.scss';
import { sendData } from '../../redux/assistant';

const MeetingPage = () => {
  const dispatch = useDispatch();
  const meetingInfo = useSelector(getMeetInfo);
  const attendees = useSelector(getAttendees);


  const handleChange = useCallback((e) => {
    clearTimeout(timerRef.current);
    setValue(e.target.value);

    timerRef.current = setTimeout(() => {
      dispatch(
        sendData({
          action_id: 'MeetingMessagesText',
          parameters: {
            userText: e.target.value,
          },
        })
      );
    }, 300);

    e.target.style.height = `${FIELD_MIN_HEIGHT}px`;
    const { scrollHeight } = e.target;
    e.target.style.height =
      scrollHeight >= FIELD_MIN_HEIGHT
        ? `${scrollHeight + 10}px`
        : `${FIELD_MIN_HEIGHT}px`;
  }, []);

  const handleClickButton = () => {
    dispatch(
      sendData({
        action_id: 'Invite',
      })
    );
  };

  const handleClickButtonMeetingInfo = () => {
    dispatch(
      sendData({
        action_id: 'ChangeMeetingPlace',
      })
    );
  }

  const handleClickButtonGoToCalendar = () => {
    dispatch(
      sendData({
        action_id: 'GoToCalendar',
      })
    );
  }

  return (
    <>
      <div className={cn(styles.eventPage)}>
        <div
          className={cn(
            styles.eventPage__section,
            styles.eventPage__section_main
          )}
          onClick={handleClickButtonGoToCalendar}
        >
          <div className={styles.eventPage__rightColumnSection}>
            <div
              className={cn(styles.eventPage__statusMeet,
                styles.eventPage__statusMeet_accept)}
            />
            <div className={styles.eventPage__icon}>
              <IconClock className={styles.eventPage__iconPoint} />
            </div>
            <div className={styles.eventPage__sectionTimeInfo}>
              <div
                className={cn(
                  styles.eventPage__text,
                  styles.eventPage__darkerText
                )}
              >
                {getDateMeetInfo(meetingInfo.date)}
              </div>
              <div
                className={cn(
                  styles.eventPage__text,
                  styles.eventPage__darkerText
                )}
              >
                {meetingInfo.start} - {meetingInfo.end}
              </div>
            </div>
            <div style={{paddingTop:"10px"}}>
              <IconChevronLeft className={styles.eventPage__arrow} />
            </div>
          </div>
        </div>


        {/* преговорка */}
        {meetingInfo.location && (
          <button
            className={cn(
              styles.eventPage__section,
              styles.eventPage__section_center,
              styles.eventPage__section_button
            )}
            onClick={handleClickButtonMeetingInfo}
          >
            <div
              className={cn(styles.eventPage__icon, styles.eventPage__icon_m)}
            >
              <IconHouse className={styles.eventPage__iconPoint} />
            </div>
            <div
              className={cn(
                styles.eventPage__text,
                styles.eventPage__text_full,
                styles.eventPage__text_main
              )}
            >
              Место встречи{' '}
              <span className={styles.eventPage__darkerText}>{meetingInfo.location}</span>
              <IconChevronLeft className={styles.eventPage__arrow} />
            </div>
          </button>
        )}
        {meetingInfo.subject && (
          <button
            className={cn(
              styles.eventPage__section,
              styles.eventPage__section_center,
              styles.eventPage__section_button
            )}
          >
            <div
              className={cn(styles.eventPage__icon, styles.eventPage__icon_m)}
            >
              <IconEarth className={styles.eventPage__iconPoint} />
            </div>
            <div
              className={cn(
                styles.eventPage__text,
                styles.eventPage__text_full,
                styles.eventPage__text_main
              )}
            >
              Jazz{' '}
              <span className={styles.eventPage__darkerText}>
                {meetingInfo.jazzLink}
              </span>
              {/* <IconChevronLeft className={styles.eventPage__arrow} /> */}
            </div>
          </button>
        )}
        {/* Напоминание  */}
        <button
          disabled
          className={cn(
            styles.eventPage__section,
            styles.eventPage__section_center,
            styles.eventPage__section_button
          )}
        >
          <div className={styles.eventPage__icon}>
            <IconBell className={styles.eventPage__iconPoint} />
          </div>
          <div
            className={cn(styles.eventPage__text, styles.eventPage__text_full)}
          >
            <div
              className={cn(
                styles.eventPage__text_main,
                styles.eventPage__darkerText
              )}
            >
              Напоминание (скоро)
              <IconChevronLeft className={styles.eventPage__arrow} />
            </div>
            <div className={styles.eventPage__darkerText}>
              За 5 минут, за 10 минут, за 2 дня
            </div>
          </div>
        </button>

        {attendees.length !== 0 && (
          <button
            className={cn(
              styles.eventPage__section,
              styles.eventPage__section_button
            )}
          >
            <div
              className={cn(styles.eventPage__icon, styles.eventPage__icon_m)}
            >
              <IconParticipants className={styles.eventPage__iconPoint} />
            </div>
            <div
              className={cn(
                styles.eventPage__text,
                styles.eventPage__text_full
              )}
            >
              <div className={styles.eventPage__text_main}>
                Участники{' '}
                {/* <IconChevronLeft className={styles.eventPage__arrow} /> */}
              </div>
              <div className={styles.eventPage__darkerText}>
                {attendees
                  .map((el) => el.mailboxUser.name)
                  .join(', ')}
              </div>
            </div>
          </button>
        )}
        <div className={styles.eventPage__buttonContainer} >
          <button className={cn(
            styles.eventPage__section,
            styles.eventPage__section_button,
          )}
            onClick={handleClickButton}
          >
            <div className={styles.eventPage__textButton}>
              Пригласить
            </div>
          </button>
        </div>
      </div >
    </>
  );
};

export default MeetingPage;
