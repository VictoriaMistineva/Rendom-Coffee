import React from 'react';
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { geUsersBubbles } from '../../redux/bubblesImage';
import { sendData } from '../../redux/assistant';

const FlowerBubble = () => {
    const users = useSelector(geUsersBubbles);
    const dispatch = useDispatch();
    const handleClickButton = (id:string) => {
        dispatch(
            sendData({
                action_id: 'Invite',
                parameters: id
            })
        );
    };
    return (
        <div className="container">
            <div className="path">
                <div className="imgCenter">
                    <img src="http://lea.verou.me/book/adamcatlace.jpg" className="avatar2" alt="description of image" />
                </div>
                {
                    users.map((item, index) => (
                        <div className="avatarContainer" onClick={()=>{handleClickButton(item.id)}}>
                            <img src={item.avatar} className="avatar" alt="description of image2" />
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default FlowerBubble;


