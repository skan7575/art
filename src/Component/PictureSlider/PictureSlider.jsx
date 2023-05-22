import React, {useEffect, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './PictureSlider.module.scss';
import './slider.css'
import Popup from "../PopupWithForm/Popup";
import PictureForm from "../PictureForm/PictureForm";
import PictureBig from "../PictureBig/PictureBig";

function PictureSlider({styleProp, images}) {

    const [styleOrder, setStyleOrder] = useState('')
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [idCard, setIdCard] = useState(0)
    const handleDragStart = (e) => e.preventDefault();

    const items = images.map((image) => (
        <div key={image.id} className={styles.pictureItem}>
            <img
                className={styles.pictureItem__image}
                src={image.url}
                alt={`Изображение ${image.id}`}
                onDragStart={handleDragStart}
            />
            <h2 className={styles.pictureItem__title}>{image.title}</h2>
            <p className={styles.pictureItem__about}>{image.about}</p>
            <p className={styles.pictureItem__price}>от {image.price} руб.</p>
            <button onClick={() => {
                setIdCard(image.newStyle)
                setStyleOrder(image.title)
                setIsPopupOpen(!isPopupOpen)
            }
            }
                    className={styles.pictureItem__buy}>Подробнее
            </button>
        </div>
    ));

    const responsive = {
        0: {
            items: 1,
            dotsDisabled: true,
            stagePadding: {
                paddingLeft: 15,
                paddingRight: 15,
            },
        },
        740: {
            items: 2,
            dotsDisabled: true,
            nav: false,
            stagePadding: {
                paddingLeft: 15,
                paddingRight: 15,
            },
        },
        880: {
            items: 3,
            nav: false, // отключить стрелки для экранов меньше 882px
            dotsDisabled: true,
            stagePadding: {
                paddingLeft: 15,
                paddingRight: 15,
            },


        },
        1000: {
            items: 3,
            nav: false, // отключить стрелки для экранов меньше 882px
            dotsDisabled: true,
            stagePadding: {
                paddingLeft: 30,
                paddingRight: 30,
            },


        }
    };
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
    const closePopup = (e) => {
        setIsPopupOpen(false); // Закрывает попап
    };

    const prevButton = <button className={styles.customPrevButton}></button>;
    const nextButton = <button className={styles.customNextButton}></button>;

    return (
        <>
            <div className={`${[`alice-carousel-new${styleProp ? styleProp : ''} `]} ${[`alice-carousel-new`]}`}>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    autoPlay
                    autoPlayInterval={5000}
                    buttonsControls
                    disableDotsControls
                    infinite
                    stagePadding={{paddingLeft: 30, paddingRight: 30}}
                    renderPrevButton={() => prevButton}
                    renderNextButton={() => nextButton}

                />
            </div>
            {isPopupOpen && ( // Отображает попап при isPopupOpen === true
                <Popup close={closePopup}
                       children={<PictureBig id={idCard} style={styleOrder}/>}>{/* Ваши дочерние компоненты попапа */}</Popup>
            )}
        </>

    );

}

export default PictureSlider;