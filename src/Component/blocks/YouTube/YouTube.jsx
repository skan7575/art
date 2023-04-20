import React from 'react';
import styles from './YouTube.module.scss'
import youtubePicture from '../../../Images/youtubePicture.jpg'
function YouTube(props) {
    return (
        <section className={styles.youtube}>
            <div className={styles.youtube__wrapper}>
                <div className={styles.youtube__container}>
                    <h2 className={styles.youtube__title}>
                        Хотите узнать больше
                        об изготовлении картин на заказ?
                    </h2>
                    <p className={styles.youtube__text}>
                        Можете посмотреть видео на нашем YouTube канале о создании картин на холсте. На канале вы
                        найдете видеоролики, демонстрирующие, как создавались различные картины с использованием
                        различных техник
                    </p>
                    <a className={styles.youtube__link} href='/#' target='_blank'>Смотреть все видео</a>
                </div>
                <img className={styles.youtubePicture} src={youtubePicture} alt=""/>
            </div>
        </section>
    );
}

export default YouTube;