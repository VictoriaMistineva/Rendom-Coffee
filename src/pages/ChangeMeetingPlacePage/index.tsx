import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ChangeMeetingPlacePage.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { finishIsLoading, sendData } from '../../redux/assistant';
import { getMeetingPoint } from '../../redux/changeMeetingPlace';
import cn from 'classnames';


const ChangeMeetingPlacePage = () => {
    const meetingPoint = useSelector(getMeetingPoint);
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");
    const timerRef = useRef(null);

    // console.log(meetingPoint + " ---meetingPoint")
    // console.log(value + " ---value")
    const handleChange = useCallback((e: { target: { value: any; }; }) => {
        const { value } = e.target;
        // @ts-ignore
        clearTimeout(timerRef.current);
        //@ts-ignore
        timerRef.current = setTimeout(() => {
            dispatch(
                sendData({
                    action_id: 'MeetingPoint',
                    parameters: {
                        text: value,
                    },
                })
            );
            dispatch(finishIsLoading())
        }, 300);
        setValue(value);
    }, []);


    const handleSendData = () => {
        dispatch(
            sendData({
                action_id: 'Continue',
                parameters: {
                    userText: value,
                },
            })
        );
    };

    useEffect(() => {
        setValue(meetingPoint);
      }, [meetingPoint]);
      
    return (
        <>
            <div>
                <textarea
                    className={styles.meetingMessages__field}
                    onInput={(e: any) => handleChange(e)}
                    value={value}
                    placeholder="Введите или продиктуйте текст"
                    autoFocus
                />
            </div >

            <div className={styles.meetingMessages__buttonContainer}>
                <button
                    className={cn(styles.meetingMessages__button, value && styles.meetingMessages__button_green)}
                    onClick={ value ? handleSendData : undefined}
                >
                   Продолжить
                </button>
            </div>
        </>
    );
};

export default ChangeMeetingPlacePage;

