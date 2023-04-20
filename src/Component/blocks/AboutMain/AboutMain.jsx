import React from 'react';
import styles from './AboutMain.module.scss'
import PictureSlider from "../../PictureSlider/PictureSlider";

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
                <PictureSlider />
                <h2 className={`${styles[`about-main__about-title`]} ${styles[`about-main__about-title_two`]}`}>СтИЛИЗАЦИи “premium”</h2>
                <p className={styles['about-main__about-text']}>Срок изготовления от 3-х дней</p>
                <PictureSlider styleProp={'_left'}/>
            </div>
        </section>
    );
}

export default AboutMain;