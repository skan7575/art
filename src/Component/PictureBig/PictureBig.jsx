import styles from './PictureBig.module.scss'
import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './slider.css'


import OnlyForm from "../Calculator/OnlyForm/OnlyForm";


const realisticArt = [
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/Realistic%2010.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/Realistic%2011.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/Realistic%2012.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/Realistic%2013.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/Realistic%2014.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/Realistic%2015.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/Realistic%2016.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/Realistic%204%201.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/realisticArt/real%202.jpg`,
    },
]
const fotoPrint = [
    {
        url: `https://artmemory-rus.ru/Files/fotoPrint/foto.jpg`,
    },

]
const classicArt = [
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art-1.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art-2.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art-3.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art-4.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art-5.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art-6.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art-7.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/classicArt/Classic%20Art11.jpg`,
    },
]
const artClassicPro = [
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Art%20Classic%20Pro-1.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Art%20Classic%20Pro-2.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Art%20Classic%20Pro-3.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Art%20Classic%20Pro-4.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Art%20Classic%20Pro.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Oil%20Pro.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Oil%20Pro-1.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Oil%20Pro-2.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/artClassicPro/Oil%20Pro-3.jpg`,
    },
]
const oilLight = [
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light-1.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light-2.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light-3.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light-4.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light-5.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light-6.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light-7.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light-8.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilLight/Oil%20Light.jpg`,
    },
]
const oilPro = [
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro-1.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro-2.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro-3.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro-4.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro-5.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro-6.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro-7.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro-8.jpg`,
    },
    {
        url: `https://artmemory-rus.ru/Files/oilPro/Oil%20Pro.jpg`,
    },
]

const pictureData = {
    classicArt: classicArt,
    fotoPrint: fotoPrint,
    realisticArt: realisticArt,
    artClassicPro: artClassicPro,
    oilLight: oilLight,
    oilPro: oilPro,
};


function PictureBig({id}) {
    const [style, setStyle] = useState(id);
    console.log(pictureData[style])
    const handleChangeStyle = (newStyle) => {
        setStyle(newStyle);
        setPictureArr(pictureData[newStyle]);
    };
    const [PictureArr, setPictureArr] = useState(pictureData[style]);
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        arrows: false,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        }
    };

    function SamplePrevArrow({className, style, onClick}) {
        return (
            <button
                className={` ${styles.prev}`}
                onClick={onClick}
            />
        );
    }

    function SampleNextArrow({className, style, onClick}) {
        return (
            <button
                className={` ${styles.next}`}
                onClick={onClick}
            />
        );
    }

    const handlePrevClick = () => {

        if (sliderRef && sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    const handleNextClick = () => {
        if (sliderRef && sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };


    return (
        <div className={styles.info}>
            <div className={styles.info__slider}>
                <Slider ref={sliderRef} {...settings}>
                    {PictureArr.map((image) => (
                        <div className={styles.info__card} key={image.id}>
                            <img src={image.url} alt={`Slide ${image.id}`} className={styles.info__image}/>
                        </div>
                    ))}
                </Slider>
                <div className={styles.info__controlsContainer}>
                    <div className={styles.info__counter}>
                        <span className={styles.info__counter_text}>{currentSlide + 1}/{PictureArr.length}</span>
                        <progress className={styles.info__counter_progress} value={currentSlide + 1}
                                  max={PictureArr.length}/>
                    </div>
                    <div className={styles.info__controls}>
                        <SampleNextArrow onClick={handlePrevClick}/>
                        <SamplePrevArrow onClick={handleNextClick}/>
                    </div>
                </div>
            </div>
            <div className={styles.info__calc}>
                <OnlyForm style={style} onChangeStyle={handleChangeStyle}/>
            </div>
        </div>
    );
}


export default PictureBig;
