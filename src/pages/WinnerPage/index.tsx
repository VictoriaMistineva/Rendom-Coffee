import React from 'react';
import styles from './winnerPage.module.scss'
import sberTime from '../../assets/img/icons/sberTime.png'
import sberboomMini from '../../assets/img/icons/sberboom.png'
import sberboom from '../../assets/img/icons/SberBoom1.png'
import ded from '../../assets/img/icons/Деды.png'
import Snowfall from 'react-snowfall';
import { useSelector } from 'react-redux';
import { getParticipantCount, getWinners } from '../../redux/winner';
import { getIsMobile } from '../../redux/assistant';

const WinnerPage = () => {
    const winner = useSelector(getWinners);
    const participantCount = useSelector(getParticipantCount);
    const isMobile = useSelector(getIsMobile);

    return (
        <>
            <Snowfall
                speed={[0, 0.5]}
            />
            <div className={styles.title} >2023</div>
            {!isMobile ? (
                <div className={styles.imgDed}>
                    <div className={styles.imgDed_texts}>
                        Всего участников
                    </div>
                    <div className={styles.imgDed_content}>
                        <div className={styles.imgDed_content_text}>
                            {participantCount}
                        </div>
                    </div>
                    <img src={ded} alt="ded " />
                </div>
            ) :
                (
                    <div>
                       
                    </div>
                )
            }

            {!isMobile ? (
                <div className={styles.winnerPageContent}>
                    <div className={styles.winnerPage}>

                        <div className={styles.containerPrize}>
                            <div className={styles.containerPrize_text}>
                                <strong>Первый приз-</strong> умная колонка SberBoom</div>
                            <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px" }}>
                                <img src={sberboom} alt="sberboom" />
                                <div className={styles.winnerText}>
                                    <div className={styles.winnerText_text}>
                                        {winner.length > 0 ? winner[0].name : ""}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.containerPrize}
                            style={{ paddingLeft: "300px" }} >

                            <div className={styles.containerPrize_text}>
                                <strong>Второй приз -</strong> умная колонка Sberbox time</div>
                            <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px" }}>
                                <img src={sberTime} alt="sberTime" style={{ paddingRight: "10px" }} />
                                <div className={styles.winnerText} >
                                    <div className={styles.winnerText_text}>
                                        {winner.length > 0 ? winner[1].name : ""}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.containerPrize}
                            style={{ paddingLeft: "600px" }} >
                            <div className={styles.containerPrize_text}>
                                <strong>Третий приз -</strong> умная колонка SberBoom mini</div>
                            <div style={{ display: "flex", alignItems: "center", paddingLeft: "30px" }}>
                                <img src={sberboomMini} alt="sberboomMini" />
                                <div className={styles.winnerText}>
                                    <div className={styles.winnerText_text}>
                                        {winner.length > 0 ? winner[2].name : ""}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>)
                :
                (
                    <div >
                        <div className={styles.count}>
                            <div className={styles.count_texts}>
                                Всего участников
                            </div>
                            <div className={styles.count_content}>
                                <div className={styles.count_content_text}>
                                    {participantCount}
                                </div>
                            </div>
                        </div>

                        <div className={styles.winnerPage}>

                            <div className={styles.containerPrize}>
                                <div className={styles.containerPrize_text}>
                                    <strong>Первый приз-</strong> умная колонка SberBoom</div>
                                <div style={{ display: "flex", alignItems: "center"}}>
                                    <img src={sberboom} alt="sberboom" />
                                    <div className={styles.winnerText}>
                                        <div className={styles.winnerText_text}>
                                            {winner.length > 0 ? winner[0].name : ""}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.containerPrize}>


                                <div className={styles.containerPrize_text}>
                                    <strong>Второй приз -</strong> умная колонка Sberbox time</div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img src={sberTime} alt="sberTime"  />
                                    <div className={styles.winnerText} >
                                        <div className={styles.winnerText_text}>
                                            {winner.length > 0 ? winner[1].name : ""}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.containerPrize}>
                                <div className={styles.containerPrize_text}>
                                    <strong>Третий приз -</strong> умная колонка SberBoom mini</div>
                                <div style={{ display: "flex", alignItems: "center"}}>
                                    <img src={sberboomMini} alt="sberboomMini" />
                                    <div className={styles.winnerText}>
                                        <div className={styles.winnerText_text}>
                                            {winner.length > 0 ? winner[2].name : ""}
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                )
            }
        </>
    );
};

export default WinnerPage;
