import React, {useEffect, useRef, useState} from 'react';
import styles from './main.module.scss'
import image1 from '../Images/MainBanner.jpg';
import image2 from '../Images/2.jpg';
import image3 from '../Images/3.jpg';
import telegram from '../Images/telegram.svg'
import whatsap from '../Images/whatsap.svg'
import dzen from '../Images/dzen.svg'
import youtube from '../Images/youtube.svg'
import vk from '../Images/vk.svg'
import AboutMain from "../Component/blocks/AboutMain/AboutMain";
import Calculator from "../Component/Calculator/Calculator";
import AboutProject from "../Component/blocks/AboutProject/AboutProject";
import YouTube from "../Component/blocks/YouTube/YouTube";
import Faq from "../Component/blocks/Faq/Faq";
import Rewiev from "../Component/blocks/Rewiev/OrderForm";
import OrderForm from "../Component/blocks/Rewiev/OrderForm";
import image1Mobile from "../Images/Main/1.jpg"
import AboutUsPeople from "../Component/blocks/AboutUsPeople/AboutUsPeople";

function Main(props) {
    const mobileImages = [image1Mobile, image2, image3]
    const [activeIndex, setActiveIndex] = useState(1);
    const prevIndexRef = useRef(activeIndex);
    const isFirstRender = useRef(true);
    const isMobile = window.innerWidth < 882;
    const images = isMobile ? mobileImages : [image1, image2, image3];


    useEffect(() => {
        prevIndexRef.current = activeIndex;
    }, [activeIndex]);



    const transitionDuration = isFirstRender.current ? '0s' : '0.5s';
    isFirstRender.current = false;

    const handleNext = () => {
        setActiveIndex(activeIndex === images.length ? 1 : activeIndex + 1);
    };

    const handlePrev = () => {
        setActiveIndex(activeIndex === 1 ? images.length : activeIndex - 1);
    };

    return (
        <>
            <main className={styles.main}
                  style={{
                      backgroundSize: 'cover',
                      backgroundPosition: `${isMobile ? 'bottom' : 'center'}`,
                      backgroundImage: `url(${images[activeIndex - 1]})`,
                      transitionDuration: transitionDuration,
                  }}>
                <div className={styles.main__container}>
                    <div className={styles.main__wrapper}>
                        <p className={styles.main__text}>Творческая мастерская</p>
                        <h1 className={styles.main__title}>“ART MEMORY” <br/> <span className={styles.main__titleSpan}>Авторские картины на холсте на заказ</span>
                        </h1>
                        <div className={styles.main__buttons}>
                            <button className={styles.main__callback}>Связаться</button>
                            <button className={`${styles.main__callback} ${styles.main__about}`}>Познакомимся?</button>
                        </div>
                    </div>
                </div>
                <div className={styles.main__arrowContainer}>
                    <button onClick={handleNext} className={styles.main__arrow}></button>
                    <button onClick={handlePrev} className={`${styles.main__arrow} ${styles.main__arrowDown}`}></button>
                </div>
                <ul className={styles.main__social}>
                    <a target={"_blank"} href="#"><img src={telegram} alt=""/></a>
                    <a target={"_blank"} href="#"><img src={whatsap} alt=""/></a>
                    <a target={"_blank"} href="#"><img src={dzen} alt=""/></a>
                    <a target={"_blank"} href="#"><img src={youtube} alt=""/></a>
                    <a target={"_blank"} href="#"><img src={vk} alt=""/></a>
                </ul>
                <p className={styles.main__feature}>"Эмоции, пожалуй, самый лучший подарок"</p>
            </main>
            <AboutMain/>
            <Calculator/>
            <AboutProject />
            <YouTube />
            <Faq />
            <AboutUsPeople />
            <OrderForm />
        </>

    );
}

export default Main;
