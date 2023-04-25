import React from 'react';
import styles from './AboutMain.module.scss'
import PictureSlider from "../../PictureSlider/PictureSlider";
import img1 from "../../../Images/Slider/Classic Art.jpg";
import img2 from "../../../Images/Slider/realistic Art.jpg";
import img3 from "../../../Images/Slider/Foto Print.jpg";
import img4 from "../../../Images/Slider/oil pro.jpg";
import img5 from "../../../Images/Slider/Art Classic Pro.jpg";
import img6 from "../../../Images/Slider/Oil Light.jpg";
const images = [
    {
        id: 1,
        url:` ${img1}`,
        title: 'Классическое искусство',
        about: 'Одна из самых универсальных стилизаций',
        price: '4 200',
    },
    {
        id: 1,
        url:` ${img2}`,
        title: 'Realistic Art',
        about: 'Легкая прорисовка фото, без каких-либо изменений. ',
        price: '4 200',
    },
    {
        id: 1,
        url:` ${img3}`,
        title: 'Foto Print',
        about: 'Печать исходного фото на холсте, без художественной обработки',
        price: '2 300',
    },
];

const images2 = [
    {
        id: 1,
        url:` ${img4}`,
        title: 'Oil Pro',
        about: 'Картина рисуется полностью с нуля',
        price: '12 000',
    },
    {
        id: 1,
        url:` ${img5}`,
        title: 'Art Classic Pro',
        about: 'Авторская прорисовка фото с особым вниманием к деталям',
        price: '5 900',
    },
    {
        id: 1,
        url:` ${img6}`,
        title: 'Oil Light',
        about: 'Легкая прорисовка фото под масленную живопись',
        price: '10 000',
    },
];

function AboutMain(props) {
    return (
        <section className={styles['about-main']}>
            <div className={styles['about-main__wrapper']}>
                <h2 className={styles['about-main__title']}> О Нас</h2>
                <div className={styles['about-main__text-container']}>
                    <p className={styles['about-main__text-block']}>Art Memory — творческая мастерская, созданная для того, чтобы сохранить ваши воспоминания. Мы специализируемся на создании красивых и современных портретов, которые будут храниться долгие годы. </p>
                    <p className={styles['about-main__text-block']}>Предлагаем различные варианты прорисовки и покрытия картины в соответствии с вашими потребностями. Если вы ищете что-то традиционное или что-то веселое и уникальное, то обязательно найдете идеальную стилизацию, чтобы сохранить свои воспоминания.</p>
                </div>
                <h2 className={styles['about-main__about-title']}>СтИЛИЗАЦИи “Standart”</h2>
                <p className={styles['about-main__about-text']}>Срок изготовления 1-2 дня</p>
                <PictureSlider images={images} />
                <h2 className={`${styles[`about-main__about-title`]} ${styles[`about-main__about-title_two`]}`}>СтИЛИЗАЦИи “premium”</h2>
                <p className={styles['about-main__about-text']}>Срок изготовления от 3-х дней</p>
                <PictureSlider  images={images2} styleProp={'_left'}/>
            </div>
        </section>
    );
}

export default AboutMain;