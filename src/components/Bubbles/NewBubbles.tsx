import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { data } from "./data";
import "./styles.css";
import FlowerBubble from '../FlowerBubble';
import { useDispatch, useSelector } from 'react-redux';
import { geUsersBubbles } from '../../redux/bubblesImage';
import { sendData } from '../../redux/assistant';
const NewBubbles = () => {
    const containerWidth = window.innerWidth < 650 ? window.innerWidth : 500;
    const startBubbleWidth = Math.floor(containerWidth / 5);
    const users = useSelector(geUsersBubbles);

    const dispatch = useDispatch();
    const handleClickButton = (id: string) => {
        dispatch(
            sendData({
                action_id: 'Invite',
                parameters: id
            })
        );
    };
    type BubbleImageProps = {
        imgUrl: string;
        width: number;
        visibility?: boolean;
        top?: number;
        right?: number;
        left?: number;
        bottom?: number;
    };

    const BubbleImage: React.FC<BubbleImageProps & React.HTMLAttributes<HTMLImageElement>> = ({ imgUrl, width, visibility, top, right, left, bottom }) => {
        return (
            <>
                <img src={imgUrl} width={width} style={{
                    borderRadius: "50%",
                    top: top ? top : 0,
                    right: right ? right : 0,
                    left: left ? left : 0,
                    bottom: bottom ? bottom : 0,
                    position: "relative",
                    animationDuration: "7s",
                    visibility: visibility === false ? "hidden" : "visible",
                }}
                    //className={"bubbleImg5"}
                    className={"bubbleImg5"}
                />
            </>
        );
    };

    return (
        <>

            <Container fluid >
                <Row justify="around">
                    <Col xs={"content"} style={{ marginTop: 30 }}>
                        <BubbleImage
                            imgUrl={users[0].avatar ? users[0].avatar : ""}
                            width={startBubbleWidth}
                            onClick={()=>{handleClickButton(users[0].id)}}
                        />
                    </Col>
                    <Col xs={"content"} >
                        <BubbleImage
                            imgUrl={users[1].avatar ? users[1].avatar : ""}
                            width={startBubbleWidth}
                            onClick={()=>{handleClickButton(users[1].id)}}
                        />
                    </Col>
                    <Col xs={"content"} style={{ marginTop: 30 }}>
                        <BubbleImage
                            imgUrl={users[2].avatar ? users[2].avatar : ""}
                            width={startBubbleWidth}
                            onClick={()=>{handleClickButton(users[2].id)}}
                        />
                    </Col>
                </Row>
                <br></br>
                <Row justify="around" style={{ marginTop: 30 }}>
                    <Col className={"bubbleImg6"}
                        style={{
                            animationDuration: "11s"
                        }}>
                        <FlowerBubble />
                    </Col>
                </Row>
                <Row justify="around" style={{ marginTop: 230 }}>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={users[10].avatar ? users[10].avatar : ""}
                            width={startBubbleWidth}
                            onClick={()=>{handleClickButton(users[10].id)}}
                        />
                    </Col>
                    <Col xs={"content"} style={{ marginTop: 20 }}>
                        <BubbleImage
                            imgUrl={users[11].avatar ? users[11].avatar : ""}
                            width={startBubbleWidth}
                            onClick={()=>{handleClickButton(users[11].id)}}
                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={users[12].avatar ? users[12].avatar : ""}
                            width={startBubbleWidth}
                            onClick={()=>{handleClickButton(users[12].id)}}
                        />
                    </Col>
                </Row>
                <br></br>
                <Row justify="around" >
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={users[13].avatar ? users[13].avatar : ""}
                            width={startBubbleWidth}
                            top={-15}
                            left={30}
                            onClick={()=>{handleClickButton(users[13].id)}}
                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={users[0].avatar ? users[14].avatar : ""}
                            width={startBubbleWidth}
                            top={-15}
                            left={-30}
                            onClick={()=>{handleClickButton(users[14].id)}}
                        />
                    </Col>
                </Row>

                {/* test */}
                {/* <Row justify="around" >
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=9"}
                            width={startBubbleWidth}
                        />
                    </Col>
                    <Col xs={"content"} style={{ marginTop: 20 }}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=10"}
                            width={startBubbleWidth}

                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=11"}
                            width={startBubbleWidth}
                        />
                    </Col>
                </Row>
                <br></br>
                <Row justify="around" >
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=12"}
                            width={startBubbleWidth}
                            top={-15}
                            left={30}
                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=13"}
                            width={startBubbleWidth}
                            top={-15}
                            left={-30}
                        />
                    </Col>
                </Row>
                <Row justify="around" >
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=9"}
                            width={startBubbleWidth}
                        />
                    </Col>
                    <Col xs={"content"} style={{ marginTop: 20 }}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=10"}
                            width={startBubbleWidth}

                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=11"}
                            width={startBubbleWidth}
                        />
                    </Col>
                </Row>
                <br></br>
                <Row justify="around" >
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=12"}
                            width={startBubbleWidth}
                            top={-15}
                            left={30}
                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=13"}
                            width={startBubbleWidth}
                            top={-15}
                            left={-30}
                        />
                    </Col>
                </Row> */}
            </Container>
        </>
    );
};

export default NewBubbles;