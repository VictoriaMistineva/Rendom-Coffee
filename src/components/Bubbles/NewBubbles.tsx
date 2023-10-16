import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { data } from "./data";
import "./styles.css";
import FlowerBubble from '../FlowerBubble';

const NewBubbles = () => {
    const containerWidth = window.innerWidth < 650 ? window.innerWidth : 500;
    const startBubbleWidth = Math.floor(containerWidth / 5);

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
                    animationDuration: "60s",
                    visibility: visibility === false ? "hidden" : "visible",
                }}
                    // className={"bubbleImg10"}
                />
            </>
        );
    };

    return (
        <>
            <Container fluid >
                <Row justify="around">
                    <Col xs={"content"} style={{ marginTop: 30}}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=9"}
                            width={startBubbleWidth}
                        />
                    </Col>
                    <Col xs={"content"} >
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=10"}
                            width={startBubbleWidth}
                        />
                    </Col>
                    <Col xs={"content"} style={{ marginTop: 30}}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=11"}
                            width={startBubbleWidth }
                        />
                    </Col>
                </Row>
                <br></br>
                <Row justify="around" style={{ marginTop: 30}}>
                    <Col>
                        <FlowerBubble/>
                    </Col>
                </Row>
                <Row justify="around" style={{ marginTop: 230}}>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=9"}
                            width={startBubbleWidth}
                        />
                    </Col>
                    <Col xs={"content"} style={{ marginTop: 20}}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=10"}
                            width={startBubbleWidth}
                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=11"}
                            width={startBubbleWidth }
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
                            width={startBubbleWidth }
                            top={-15}
                            left={-30}
                        />
                    </Col>
                </Row>

                {/* test */}
                <Row justify="around" >
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=9"}
                            width={startBubbleWidth}
                        />
                    </Col>
                    <Col xs={"content"} style={{ marginTop: 20}}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=10"}
                            width={startBubbleWidth}
                            
                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=11"}
                            width={startBubbleWidth }
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
                            width={startBubbleWidth }
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
                    <Col xs={"content"} style={{ marginTop: 20}}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=10"}
                            width={startBubbleWidth}
                            
                        />
                    </Col>
                    <Col xs={"content"}>
                        <BubbleImage
                            imgUrl={"https://i.pravatar.cc/?img=11"}
                            width={startBubbleWidth }
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
                            width={startBubbleWidth }
                            top={-15}
                            left={-30}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default NewBubbles;