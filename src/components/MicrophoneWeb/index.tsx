import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getIsMicrophoneOff, getIsSoundOff, turnOffMicrophone, turnOffSound, turnOnMicrophone, turnOnSound } from '../../redux/utilsCommandName';
import { getMicrophoneWeb, getSoundWeb } from '../../redux/determineWinner';
import { getStoriesPage } from '../../redux/firstStoriesPage';
import { sendData } from '../../redux/assistant';
import styles from './MicrophoneWeb.module.scss';
import MICROPHONE_OFF from '../../assets/img/icons/microphoneOff.svg';
import MICROPHONE_ON from '../../assets/img/icons/microphoneOn.svg';
import { ReactComponent as IconSoundOff } from '../../assets/img/icons/soundOff.svg';
import { ReactComponent as IconSoundOn } from '../../assets/img/icons/soundOn.svg';
import { getMicrophoneRegistrationWeb, getSoundRegistrationWeb } from '../../redux/userRegistration';

const MicrophoneWeb = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isMicrophoneOff = useSelector(getIsMicrophoneOff);
    const isSoundOff = useSelector(getIsSoundOff);

    const isMicrophoneWeb = useSelector(getMicrophoneWeb);
    const isSoundWeb = useSelector(getSoundWeb);
    const isMicrophoneWebRegistration = useSelector(getMicrophoneRegistrationWeb);
    const isSoundWebRegistration = useSelector(getSoundRegistrationWeb);
    const initialSlide = useSelector(getStoriesPage);

    useEffect(() => {
        console.log(isMicrophoneWebRegistration + " fe")
        if (!isSoundWeb || !isSoundWebRegistration) {
            dispatch(turnOffSound());
        }
        // console.log(isMicrophoneWeb + "isMicrophoneWeb")
        if (!isMicrophoneWeb || !isMicrophoneWebRegistration) {
            dispatch(turnOffMicrophone())
        }
    }, [isSoundWeb, isMicrophoneWeb,isMicrophoneWebRegistration,isSoundWebRegistration])

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

        <>
            <div className={styles.sberTopQrPage__buttonsContainer}>
                <div className={styles.sberTopQrPage__buttons}>
                    <button
                        onClick={handleClickSound}
                        className={styles.sberTopQrPage__button}
                    >
                        {isSoundOff ? <IconSoundOff /> : <IconSoundOn />}

                    </button>
                    <button
                        onClick={handleClickMicrophone}
                        className={styles.sberTopQrPage__button}
                    >
                        <img src={isMicrophoneOff ? MICROPHONE_OFF : MICROPHONE_ON} />
                    </button>

                </div>

            </div>
        </>
    );
};

export default MicrophoneWeb;
