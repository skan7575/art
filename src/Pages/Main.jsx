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
import OrderForm from "../Component/blocks/Rewiev/OrderForm";
import image1Mobile from "../Images/Main/1.jpg"
import HelmetComponent from "../Component/Helmet/HelmetReact";
import {Link} from "react-router-dom";
import Adventure from "../Component/Adventure/Adventure";
import SizePicture from "../Component/SizePicture/SizePicture";
import PictureStyle from "../Component/PictureStyle/PictureStyle";
import {Link as ScrollLink} from "react-scroll";


const linkWhatsApp = 'https://wa.me/79145647254?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%8F%20%D1%81%20%D0%92%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C...'

function Main(props) {
    const mobileImages = [image1Mobile, image2, image3]
    const [activeIndex, setActiveIndex] = useState(1);
    const prevIndexRef = useRef(activeIndex);
    const isFirstRender = useRef(true);
    const isMobile = window.innerWidth < 557;
    const images = isMobile ? mobileImages : [image1, image2, image3];

    useEffect(() => {
        prevIndexRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    const transitionDuration = isFirstRender.current ? '0s' : '0.5s';
    isFirstRender.current = false;

    const handleNext = () => {
        setActiveIndex(activeIndex === images.length ? 1 : activeIndex + 1);
    };


    const handlePrev = () => {
        setActiveIndex(activeIndex === 1 ? images.length : activeIndex - 1);
    };

    const timeout = setTimeout(() => {
        if (isMobile) {

        } else {
            setActiveIndex(activeIndex === images.length ? 1 : activeIndex + 1);
        }
    }, 5000);

    return (
        <>
            <HelmetComponent
                title='Art Memory - Картины по фото на холсте под заказ'
                description='Закажите картину: портрет, фотоколлаж, модульную, репродукцию, фото на холсте или на фотобумаге с оформлением в паспарту и рамку   Печать оригинальными чернилами на холсте из натурального хлопка. Прорисовка маслом'
            />
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
                        <h1 className={styles.main__title}>“ART MEMORY” <br/> <span className={styles.main__titleSpan}>Авторские картины на холсте <br/> под  заказ</span>
                        </h1>
                        <div className={styles.main__buttons}>
                            <ScrollLink to="calculator" smooth={true} duration={500}
                                        offset={-100}
                                        className={styles.main__callback}>
                                Рассчитать стоимость
                            </ScrollLink>
                            <Link to='/about-us'
                                  className={`${styles.main__callback} ${styles.main__about}`}>Познакомимся?</Link>
                        </div>
                        <p className={styles.main__feature}>"Эмоции, пожалуй, самый лучший подарок"</p>
                    </div>
                </div>
                <div className={styles.main__arrowContainer}>
                    <button onClick={handleNext} className={styles.main__arrow}></button>
                    <button onClick={handlePrev} className={`${styles.main__arrow} ${styles.main__arrowDown}`}></button>
                </div>
                <ul className={styles.main__social}>
                    <a target={"_blank"} href="https://t.me/artmemory_shop" rel="noreferrer"><img src={telegram}
                                                                                                  alt=""/></a>
                    <a target={"_blank"} href={linkWhatsApp} rel="noreferrer"><img src={whatsap}
                                                                                   alt=""/></a>
                    <a target={"_blank"} rel="noreferrer" href="https://zen.yandex.ru/id/623a07d34f338879642bd604"><img
                        src={dzen} alt=""/></a>
                    <a target={"_blank"} rel="noreferrer"
                       href="https://www.youtube.com/channel/UCbChxyGw1P_PGJBhFtcGpQw"><img src={youtube} alt=""/></a>
                    <a target={"_blank"} rel="noreferrer" href="https://vk.com/artmemory_shop"><img src={vk}
                                                                                                    alt=""/></a>
                </ul>
            </main>
            <AboutMain/>
            <PictureStyle/>
            <SizePicture picture='https://artmemory-rus.ru/Files/size.jpg'
                         text={'Размер картины в интерьере во многом зависит от размеров и планировки\n' +
                             '                    помещения. Картина размером 50x70 см. может хорошо смотреться в небольшой комнате, а картина\n' +
                             '                    размером 80x100 см. может лучше подойти для большего пространства.'}
                         text2={'Следует учитывать расположение и пропорции картины, чтобы она дополняла общую эстетику комнаты.'}
                         text3={'Следует учитывать расположение и пропорции картины, чтобы она дополняла общую эстетику комнаты.'}
                         title={'Размеры Картин на холсте'}/>
            <Calculator id="calculator"/>
            <AboutProject/>
            <YouTube/>
            <Faq/>
            <Adventure/>
            <OrderForm/>
        </>

    );
}

export default Main;
