import React from 'react';
import { useSelector } from 'react-redux';
import Bubbles from '../../components/Bubbles/Bubbles';
import NewBubbles from '../../components/Bubbles/NewBubbles';
import FlowerBubble from '../../components/FlowerBubble';
import Coffee from '../../components/Coffee';
import { getIsMobile } from '../../redux/assistant';
import RandomSpinerAnimationMobile from '../../components/RandomSpinerAnimationMobile';

const BubblesImagePage = () => {
    const isMobile = useSelector(getIsMobile)
    console.log(isMobile)
    return ( 
        <div style={{overflowY: "hidden"}}>
            
            {!isMobile ?  <Coffee/> : <RandomSpinerAnimationMobile/>}
            {/* <Coffee/>  */}
        </div>
    );
};

export default BubblesImagePage;
    
