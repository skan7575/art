import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './PictureSlider.module.scss';

import './slider.css'

function PictureSlider({styleProp, images}) {


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
            <button className={styles.pictureItem__buy}>Заказать</button>
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
        576: {
            items: 1,
            dotsDisabled: true,
            nav: false, // отключить стрелки для экранов меньше 882px
            stagePadding: {
                paddingLeft: 15,
                paddingRight: 15,
            },
        },
        768: {
            items: 1,
            nav: false, // отключить стрелки для экранов меньше 882px
            dotsDisabled: true,
            stagePadding: {
                paddingLeft: 30,
                paddingRight: 30,
            },
        },
        882: {
            items: 3,
            nav: false, // отключить стрелки для экранов меньше 882px
            dotsDisabled: true,
            stagePadding: {
                paddingLeft: 30,
                paddingRight: 30,
            },
        }
    };

    const prevButton = <button className={styles.customPrevButton}></button>;
    const nextButton = <button className={styles.customNextButton}></button>;

    return (
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
                stagePadding={{ paddingLeft: 30, paddingRight: 30 }}
                renderPrevButton={() => prevButton}
                renderNextButton={() => nextButton}

            />
        </div>
    );

}

export default PictureSlider;