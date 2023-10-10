import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Bubble, defaultOptions } from "react-bubble-ui-v2";
// import "../react-bubble-ui/dist/index.css";
import "../../../node_modules/react-bubble-ui-v2/dist/index";
import { data } from "./data";
import "./styles.css";
import { sendData } from "../../redux/assistant";
import { useDispatch } from "react-redux";

type BubbleProps = {
};

const Bubbles: React.FC<BubbleProps> = ({ }) => {
    const dispatch = useDispatch();
    // Можно убрать если скролл не нужен
    const centerButtonRef = useRef<HTMLImageElement>(null);

    // Индекс изображения к которому скролить
    const middleIndexOfData = Math.floor(data.length / 3);

    const options = {
        size: 100,
        minSize: 90,
        gutter: 11,
        provideProps: true,
        numCols: 3,
        fringeWidth: 100,
        yRadius: 100,
        xRadius: 100,
        cornerRadius: 100,
        showGuides: false,
        compact: true,
        gravitation: 5
    };

    const handleBubbleClick = (url: string) => {
        console.log("Clicked: ", url);
        dispatch(
            sendData({
                action_id: 'bubbleClickImg',
                parameters: '1929881',
            })
        );
    };

    // Скроллит при запуске к центру - можно убрать
    // useLayoutEffect(() => {
    //     centerButtonRef.current?.scrollIntoView({ behavior: 'smooth' });
    // }, []);

    type BubbleImageProps = {
        imgUrl: string;
        width: number;
        // Если не нужен скролл можно убрать то что ниже из пропсов и ref удалить
        isMiddleBubble: boolean;
        centerButtonRef: React.RefObject<HTMLImageElement>
    };

    const BubbleImage: React.FC<BubbleImageProps & React.HTMLAttributes<HTMLImageElement>> = ({ imgUrl, width, isMiddleBubble, centerButtonRef }) => {
        return (
            <>
                <img src={imgUrl} width={width} style={{ borderRadius: "50%" }} ref={isMiddleBubble ? centerButtonRef : undefined} />
            </>
        );
    };

    const bubbles = data?.map((data, i) => {
        return (
            <BubbleImage
                imgUrl={data.imgUrl}
                width={data.width}
                className={"childComponent"}
                onClick={() => handleBubbleClick(data.imgUrl)} key={i} isMiddleBubble={i === middleIndexOfData}
                centerButtonRef={centerButtonRef}
            />
        );
    });

    return (
        <>

            <Bubble key={"bubbleContainer"} options={options} className="myBubbleUI">
                {bubbles}
            </Bubble>
        </>
    );
};

export default Bubbles;


