import React from 'react';
import cupImg from './cup.png'
import "./coffee.css";
import { useDispatch, useSelector } from 'react-redux';
import { geUsersBubbles } from '../../redux/bubblesImage';
import { sendData } from '../../redux/assistant';
import AVATAR from '../../assets/img/icons/avatar.svg';


const Coffee = () => {
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

    return (
        <div className="containerCoffee">
            <div className="container">
                <div id="cup" style={{ backgroundImage: `url(${cupImg})` }}></div>
                <div id="coffee"></div>
            </div>
            <ul className='circle-container'>
                {
                    users.slice(0, 8).map((item, index) => (
                        <li key={index} className='container1'> <img src={item.avatar ? item.avatar : AVATAR}  className="avatar" alt="..." onClick={()=>{handleClickButton(item.id)}}/></li>
                    ))
                }
            </ul>
            <ul className='circle-container2'>
                {
                    users.slice(8,16).map((item, index) => (
                        <li key={index} className='container2' onClick={()=>{handleClickButton(item.id)}}><img src={item.avatar ? item.avatar : AVATAR} className="avatar" alt="..." onClick={()=>{handleClickButton(item.id)}}/></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Coffee;
