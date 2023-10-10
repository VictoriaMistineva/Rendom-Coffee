import React from 'react';
import styles from './smallUserCard.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getAvatar } from '../../redux/smallUserCard';
import { ReactComponent as IconAction } from '../../assets/img/icons/Action.svg';
import { sendData } from '../../redux/assistant';
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
      
    return (
        <div className={styles.smallCardUser}>

            <div className={styles.smallCardUser__container}>
                    <img src={avatar} width={156} style={{ borderRadius: "50%" }} />

                <div className={styles.smallCardUser__textContainer}>
                    <div className={styles.smallCardUser__title}>
                        {users.fullName}
                    </div>
                    
                   <div className={styles.smallCardUser__subTitle}>
                        {users.team.role}
                        </div>
                    <div className={styles.smallCardUser__subTitle}>
                        {users.team.deptName}
                    </div>
                    <div className={styles.smallCardUser__cardContainer} onClick={handleClickAction}>
                        <div className={styles.smallCardUser__titleGreen}>
                            Смотреть карточку
                        </div>
                        <IconAction />
                    </div>
                    
                </div>
                <div className={styles.smallCardUser__textMeeting} onClick={handleClickButton}>
                        Предложить встречу
                </div>
            </div>
        </div>
    );
};

export default SmallUserCard;


