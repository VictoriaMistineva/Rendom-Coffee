import React from 'react';
import styles from './DetermineWinnerPage.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import snow from '../../assets/img/icons/snow.png'
import curSmall from '../../assets/img/icons/curSmall.png'

import {
    getIsMobile,
    sendData
} from '../../redux/assistant';
import { getEventButton, getText, getTitleText } from '../../redux/determineWinner';
import Snowfall from 'react-snowfall';


const DetermineWinnerPage = () => {

    const text = useSelector(getText);
    const event = useSelector(getEventButton);
    const title = useSelector(getTitleText)
    const dispatch = useDispatch();
    const isMobile = useSelector(getIsMobile);
    const handleClickButton = () => {
        dispatch(
            sendData({
                action_id: event
            }
            )
        )
    }


    return (
        <>
            <Snowfall
                speed={[0, 0.5]}
            />
            {
                isMobile ? (
                    <div className={styles.snowTitleContainersMobile}>
                        <div className={styles.snowMobile}>
                            <img src={snow} alt="snow" />
                            <div className={styles.titleContainerMobile}>
                                <div className={styles.titleContainerMobile_text}>{title}</div>
                            </div>
                        </div>
                        <img src={curSmall} alt="curSmall" />
                    </div >

                ) : (

                    <div className={styles.snowTitleContainers}>
                        <div className={styles.snow}>
                            <img src={snow} alt="snow" />
                            <div className={styles.titleContainer}>
                                <div className={styles.titleContainer_text}>{title}</div>
                            </div>
                        </div>
                    </div >


                )
            }

            <button
                className={cn(styles.button, styles.button_green)}
                onClick={handleClickButton}
            >
                {text}
            </button>
        </>
    );
};

export default DetermineWinnerPage;
