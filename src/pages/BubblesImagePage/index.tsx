import React from 'react';
import { useSelector } from 'react-redux';
import Bubbles from '../../components/Bubbles/Bubbles';
import NewBubbles from '../../components/Bubbles/NewBubbles';
import FlowerBubble from '../../components/FlowerBubble';
import Coffee from '../../components/Coffee';

const BubblesImagePage = () => {
    return ( 
        <div style={{overflowY: "hidden"}}>
            {/* <Bubbles /> */}
            {/* <NewBubbles/> */}
            {/* <FlowerBubble/> */}
            <Coffee/>
        </div>
    );
};

export default BubblesImagePage;
    
