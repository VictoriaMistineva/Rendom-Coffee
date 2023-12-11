import React from 'react';
import styles from './smallUserCard.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getAvatar } from '../../redux/smallUserCard';
import { ReactComponent as IconAction } from '../../assets/img/icons/Action.svg';
import { sendData } from '../../redux/assistant';
import AVATAR from '../../assets/img/icons/avatar.svg';
const SmallUserCard = () => {

  const users = useSelector(getUsers);
  const avatar = useSelector(getAvatar);

  const dispatch = useDispatch();

  const handleClickButton = () => {
    dispatch(
      sendData({
        action_id: 'clickOfferMeetingButton',
      })
    );
  };
  const handleClickAction = () => {
    dispatch(
      sendData({
        action_id: 'clickReadCardButton',
      })
    );
  };
  const getName = (() => {
    let fullName = users.fullName.split(" ")
    let objFullName = {
      fio: fullName[0],
      name : `${fullName[1]} ${fullName[2] ? fullName[2] : ""}`
    }
    return objFullName
  })

  return (
    <div className={styles.smallCardUser}>

      <div className={styles.smallCardUser__container}>
        <img src={avatar ? avatar : AVATAR} width={156} style={{ borderRadius: "50%" }} />

        <div className={styles.smallCardUser__textContainer}>
          <div className={styles.smallCardUser__title}>
            {getName().fio}
          </div>
          <div className={styles.smallCardUser__title}>
            {getName().name}
          </div>

          <div className={styles.smallCardUser__subTitle}>
            {users.position}
          </div>
          <div className={styles.smallCardUser__subTitle}>
            {users.department}
          </div>
          {/* <div className={styles.smallCardUser__cardContainer} onClick={handleClickAction}>
            <div className={styles.smallCardUser__titleGreen}>
              Смотреть карточку
            </div>
            <IconAction />
          </div> */}

        </div>
        {/* <div className={styles.smallCardUser__textMeeting} onClick={handleClickButton}>
          Предложить встречу
        </div> */}
      </div>
    </div>
  );
};

export default SmallUserCard;


