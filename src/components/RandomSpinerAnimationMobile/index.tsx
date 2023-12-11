import React, { useEffect, useState } from 'react';
import treeAndSanta from './santa.png'
import подарок from './подарок.png'
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { geUsersBubbles } from '../../redux/bubblesImage';
import { sendData } from '../../redux/assistant';
// import AVATAR from '../../assets/img/icons/снежинка.png';
import AVATAR from '../../assets/img/icons/avatar.svg';
import Snowfall from 'react-snowfall'

const RandomSpinerAnimationMobile = () => {


    const users = useSelector(geUsersBubbles);
    const dispatch = useDispatch();

    const handleClickButton = (id: string) => {
        dispatch(
            sendData({
                action_id: 'SelectedUser',
                parameters: { id: id }
            })
        );
    };

    useEffect(() => {

        const timeout = setTimeout(() => {
            const children = document.querySelectorAll('.circle-container > *');
            children.forEach((child) => {
                child.classList.add('stop-animation');
            });

            const circleContainer2 = document.querySelectorAll('.circle-container2 > *');
            circleContainer2.forEach((child) => {
                child.classList.add('stop-animation');
            });

            const container1Img = document.querySelectorAll('.container1 img');
            container1Img.forEach((child) => {
                child.classList.add('stop-animation');
            });

            const container1Img2 = document.querySelectorAll('.container2 img');
            container1Img2.forEach((child) => {
                child.classList.add('stop-animation');
            });

        }, 10000);
        return () => clearTimeout(timeout);

    }, []);

    return (

        <div className="containerCoffee">
            <div className="containerImg">
                <div id="cup" style={{ backgroundImage: `url(${treeAndSanta})` }}>
                </div>
                <ul className='circle-container'>
                    {
                        users.slice(0, 8).map((item, index) => (
                            <li key={index} className='container1'> <div className='ct'><img src={item.avatar ? item.avatar : AVATAR} className="avatar" alt="..." onClick={() => { handleClickButton(item.id) }} /></div></li>
                        ))
                    }
                </ul>
                <ul className='circle-container2'>
                    {
                        users.slice(8, 16).map((item, index) => (
                            <li key={index} className='container2' onClick={() => { handleClickButton(item.id) }}><div className='ct2'><img src={item.avatar ? item.avatar : AVATAR} className="avatar" alt="..." onClick={() => { handleClickButton(item.id) }} /></div></li>
                        ))
                    }
                </ul>
            </div>
        </div>



    );
};


export default RandomSpinerAnimationMobile;
