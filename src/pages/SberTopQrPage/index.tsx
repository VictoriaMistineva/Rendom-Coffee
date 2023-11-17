import React, { useCallback } from 'react';
import styles from './SberTopQrPage.module.scss'
import { ReactComponent as Illustration } from '../../assets/img/icons/Illustration.svg';
import CAT from '../../assets/img/icons/SberTOPbg.png';
import { ReactComponent as Cup } from '../../assets/img/icons/Cup3.svg';
import QR from '../../assets/img/icons/Qrsbertopblue.png';
import MICROPHONE_OFF from '../../assets/img/icons/microphoneOff.svg';
import MICROPHONE_ON from '../../assets/img/icons/microphoneOn.svg';
import { ReactComponent as IconSoundOff } from '../../assets/img/icons/soundOff.svg';
import { ReactComponent as IconSoundOn } from '../../assets/img/icons/soundOn.svg';
import { useDispatch, useSelector } from 'react-redux';
import { sendData } from '../../redux/assistant';
import { getIsMicrophoneOff, getIsSoundOff, turnOffMicrophone, turnOffSound, turnOnMicrophone, turnOnSound } from '../../redux/utilsCommandName';

const SberTopQrPage = () => {

    const isMicrophoneOff = useSelector(getIsMicrophoneOff);
    const isSoundOff = useSelector(getIsSoundOff);
    const dispatch = useDispatch();
    const handleClickMicrophone = useCallback(() => {
        if (isMicrophoneOff) dispatch(turnOnMicrophone());
        else dispatch(turnOffMicrophone());

        dispatch(
            sendData({
                action_id: isMicrophoneOff ? 'MicrophoneTurnOn' : 'MicrophoneTurnOff',
            })
        );
    }, [isMicrophoneOff]);

    const handleClickSound = useCallback(() => {
        if (isSoundOff) dispatch(turnOnSound());
        else dispatch(turnOffSound());

        dispatch(
            sendData({
                action_id: isSoundOff ? 'SoundTurnOn' : 'SoundTurnOff',
            })
        );
    }, [isSoundOff]);


    return (
        <div className={styles.container}>
            <div className={styles.sberTopQrPage} >
                <div className={styles.sberTopQrPage_content}>
                    <div className={styles.sberTopQrPage__card1}>
                        <Illustration width={"142.123,true"} height={"147.001,true"} />

                        <div className={styles.sberTopQrPage__card1_title}>
                            РАНДОМ-КОФЕ <br />В СБЕРЕ
                        </div>

                    </div>
                </div>
                <div className={styles.sberTopQrPage_content}>
                    <div className={styles.sberTopQrPage__card2}>
                        <div className={styles.sberTopQrPage__card2_title}>
                            Ко дню рождения<br />
                            <strong> Сбербанка </strong> <br />Мы запускаем<br /> внутренний сервис <br />для интересных<br /> знакомств.
                        </div>
                        <Cup />
                        <div className={styles.sberTopQrPage__card2_title}>
                            Давайте расширять<br />
                            круг своего общения<br />
                            и знакомиться<br />
                            с коллегами из других подразделений.
                        </div>
                    </div>
                </div>
                <div className={styles.sberTopQrPage_content}>
                    <div className={styles.sberTopQrPage__card3}>
                        <img src={QR} alt="qr" />
                    </div>
                </div>
            </div>
            <div className={styles.sberTopQrPage__buttonsContainer}>
                <div className={styles.sberTopQrPage__buttons}>
                    <button
                        onClick={handleClickSound}
                        className={styles.sberTopQrPage__button}
                    >
                        {/* {isSoundOff ? <IconSoundOff /> : <IconSoundOn />} */}
                        {<IconSoundOff />}
                    </button>
                    <button
                        onClick={handleClickMicrophone}
                        className={styles.sberTopQrPage__button}
                    >
                        {/* <img src={isMicrophoneOff ? MICROPHONE_OFF : MICROPHONE_ON} /> */}
                        <img src={MICROPHONE_OFF} />
                    </button>

                </div>

            </div>
        </div>
    );
};

export default SberTopQrPage;
