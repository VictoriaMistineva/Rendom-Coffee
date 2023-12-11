import React from 'react';
import styles from './UserRegistrationPage.module.scss';
import cn from 'classnames';
import Portal from '../../components/Portal';
import { ReactComponent as IconSuccess } from '../../assets/img/icons/popup-success.svg';
import { ReactComponent as IconFail } from '../../assets/img/icons/popup-fail.svg';
import { ReactComponent as IconLightGreen } from '../../assets/img/icons/light-green.svg';
import { ReactComponent as IconLightRed } from '../../assets/img/icons/light-red.svg';
import { useDispatch, useSelector } from 'react-redux';

import {
    sendData,
    close
} from '../../redux/assistant';
import { getStatus, getText } from '../../redux/userRegistration';

const UserRegistrationPage = ()  => {
    
    const status = useSelector(getStatus);
    const textItems = useSelector(getText);
    const dispatch = useDispatch();

    const handleClickClose = () => {
        dispatch(close())

    dispatch(
        sendData({
          action_id: "ClickUserRegistrationPage",
        })
      );
    }

    return (
        <>
            <Portal className={styles.statusPopup}  onClick={handleClickClose}>
                <div
                    className={cn(
                        styles.statusPopup__logo,
                        styles[`statusPopup__logo_${status}`]
                    )}
                >
                    {status === 'error' && (
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
                        {status === 'error' && (
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

            </Portal>
        </>
    );
};

export default UserRegistrationPage;
