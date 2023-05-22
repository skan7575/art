import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../blocks/AboutUsPeople/AboutUsPeople.module.scss';
import stylesAdv from './Adventure.module.scss'
import Popup from "../PopupWithForm/Popup";
import PictureForm from "../PictureForm/PictureForm";
import AboutUsPeople from "../blocks/AboutUsPeople/AboutUsPeople";
function Adventure(props) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const adventureContent = [
        {
            url: 'http://artmemory-rus.ru/Files/Adventure/Frame%201077235768.jpg',
            id: 1,
            title: 'Дополнительные услуги к картинам',
            description: 'Каждая услугу уникальна и подходит не для всех стилизаций. Рекомендуем проконсультироваться со специалистом!',
            titleUnder: 'Широкий подрамник для картины',
            aboutUnder: 'Натяжка картины на широкий подрамник (4 см, вместо\n' +
                '2 см). С таким подрамником картина выглядит более солидной и массивной. Рекомендуем такую ширину использовать на больших работах (от 60/80см.)',
            altImage: 'Широкий подрамник для картины заказать'
        },
        {
            url: 'http://artmemory-rus.ru/Files/Adventure/Frame%201077235769.jpg',
            id: 2,
            title: 'Дополнительные услуги к картинам',
            description: 'Каждая услугу уникальна и подходит не для всех стилизаций. Рекомендуем проконсультироваться со специалистом!',
            titleUnder: 'ПРОРИСОВКА В ТЕХНИКЕ “ЖИКЛЕ” и покрытие текстурным гелем',
            aboutUnder: 'Данная услуга подходит для работ в стиле «Масляная живопись». С покрытием картина выглядит так, будто она и в правду написана масляными красками. ',
            altImage: 'ПРОРИСОВКА В ТЕХНИКЕ “ЖИКЛЕ” и покрытие текстурным гелем'
        },
    ];

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setIsPopupOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);


    const handleSubmitForm = (e) => {
        e.preventDefault()
        setIsPopupOpen(true)
    }
    const closePopup = () => {
        setIsPopupOpen(false); // Закрывает попап
    };
    function SamplePrevArrow({className, style, onClick}) {
        return (
            <div
                className={` ${styles.prev} ${stylesAdv.prev}`}
                onClick={onClick}
            />
        );
    }

    function SampleNextArrow({className, style, onClick}) {
        return (
            <div
                className={` ${styles.next} ${stylesAdv.next}`}
                onClick={onClick}
            />
        );
    }

    const settings = {
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={styles.people}>
                <div className={styles.container}>
                    <h2 className={stylesAdv.title}>Дополнительные услуги к картинам</h2>
                    <Slider {...settings}>
                        {adventureContent.map((item) => (
                            <>
                                <div>
                                    <p className={stylesAdv.subTitle}>{item.description}</p>
                                </div>
                                <div className={styles.people__card} key={item.id}>
                                    <img src={item.url} alt={item.altImage} className={styles.people__image}/>
                                    <div>
                                        <h3 className={stylesAdv.h3}>{item.titleUnder}</h3>
                                        <p className={stylesAdv.text}>{item.aboutUnder}</p>
                                        <button onClick={handleSubmitForm} className={stylesAdv.button}>Получить консультацию</button>
                                    </div>
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>
                {isPopupOpen && ( // Отображает попап при isPopupOpen === true
                    <Popup close={closePopup} children={<PictureForm  />}>{/* Ваши дочерние компоненты попапа */}</Popup>
                )}
            </section>
            <AboutUsPeople />
        </>

    );
}

export default Adventure;
