import React from 'react';
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { geUsersBubbles } from '../../redux/bubblesImage';
import { sendData } from '../../redux/assistant';
import AVATAR from '../../assets/img/icons/avatar.svg';
import COFFEE from '../../assets/img/icons/Coffe.svg';

const FlowerBubble = () => {
    const users = useSelector(geUsersBubbles);
    const dispatch = useDispatch();

    const handleClickButton = (id:string) => {
        dispatch(
            sendData({
                action_id: 'SelectedUser',
                parameters: {id: id}
            })
        );
    };
    return (
        <div className="container">
            <div className="path">
                <div className="imgCenter">
                    <img src={COFFEE} className="avatar2" alt="description of image" />
                </div>
                {
                    users.slice(0, 10).map((item, index) => (
                        <div className="avatarContainer" key={index} onClick={()=>{handleClickButton(item.id)}}>
                            <img src={item.avatar ? item.avatar : AVATAR} className="avatar" alt="description of image2" />
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default FlowerBubble;


