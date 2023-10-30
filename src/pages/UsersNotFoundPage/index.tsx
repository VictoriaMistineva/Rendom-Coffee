import React, { useEffect, useState } from 'react';
import cupImg from './cup.png'
import "./coffee.css";

const UsersNotFoundPage = () => {

    return (
        <>
            <div className="containerCoffee">
                <div className="container">
                    <div id="cup" style={{ backgroundImage: `url(${cupImg})` }}></div>
                    <div id="coffee"></div>
                </div>

            </div>
            <div className='textContainer'>
                <div className="text">
                    Пользователи не найдены
                </div>
            </div>
        </>
    );
};

export default UsersNotFoundPage;
