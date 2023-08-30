import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './AboutUsPeople.module.scss';
import img1 from "../../../Images/rewiev/review.png";
import img2 from '../../../Images/rewiev/321.jpg'
import img3 from '../../../Images/rewiev/322.jpg'
import img4 from '../../../Images/rewiev/323.jpg'
import img5 from '../../../Images/rewiev/Frame 1077235789.jpg'
import img6 from '../../../Images/rewiev/324.jpg'
import stylesAdv from "../../Adventure/Adventure.module.scss";
function AboutUsPeople(props) {
    const images = [
        {
            id: 1,
            url:` ${img1}`,
            about: 'Сегодня получила, пленку пока не сняла, а только уголочек посмотрела, хочу сказать, что из всех “картин”, что я заказывала, это самая достойная и реально похоже на нарисованную!!! Вообщем мне очень понравилось! Спасибо!!! А Ваша оперативность и ответственный подход к делу вне конкуренции',
        },
        {
            id: 2,
            url:` ${img2}`,
            about: 'Портрет, который был подарен родителям — идеален!\n' +
                'Спасибо @artmemory_rus, что сделали такую красоту, которая на долгие годы будет украшать дом родителей и напоминать об этом дне',
        },
        {
            id: 2,
            url:` ${img3}`,
            about: 'Михаил) так уже годы прошли и никак вам отзыв не отправлю) за картину огромное спасибо, висит и радует глаз. По качеству и цвету я в восторге, приятно по ней проводить рукой. Спасибо вам за ваш труд ) !!!',
        },
        {
            id: 2,
            url:` ${img4}`,
            about: 'Хотелось сказать огромное спасибо за Ваш труд!!! За возможность оригинально и красиво поздравить и подарить радость и себе и любимым людям!! Слежу за вашей страничкой в Инстограмм, не бросайте Вы огромные молодцы, много было просмотрено работ, но Вы реально лучшие!!!',
        },
        {
            id: 2,
            url:` ${img5}`,
            about: 'Мы в восторге, просто шикарно получилось! Спасибо вам огромное за такие эммоции, хоть это и не нам картина, но я очень рада, что выбрали именно такой подарок. И обязательно будем заказывать у вас картины для себя. Спасибо!',
        },
        {
            id: 2,
            url:` ${img6}`,
            about: 'Я только домой её с почты забрала сегодня. Но я думаю, что картина понравиться. Так необычно, фото таких маштабов!) Подрамник обработан очень аккуратно, холст в таком исполнении, что если не рассматривать с близкого расстояния, кажется, что картина действительно нарисована кистью. Отличная работа. Одним словом — благодарю от души!',
        },
    ];

    function SamplePrevArrow({ className, style, onClick }) {

        return (
            <div
                className={` ${styles.prev}`}
                onClick={onClick}
            />
        );
    }

    function SampleNextArrow({className, style, onClick}) {
        return (
            <div
                className={` ${styles.next}`}
                onClick={onClick}
            />
        );
    }

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={styles.people}>
            <h2 className={styles.people__title}>Кусочек отзывов наших клиентов:</h2>
            <div className={styles.container}>
                <Slider {...settings}>
                    {images.map((image) => (
                        <div className={styles.people__card} key={image.id}>
                            <img  src={image.url} alt={`Slide ${image.id}`} className={styles.people__image } />
                            <p className={styles.people__text}>{image.about}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default AboutUsPeople;
