import React from 'react';
import styles from './SizePicture.module.scss'


function SizePicture({picture, text, text2, text3, title}) {
    return (
        <section className={styles.size}>
            <img className={styles.size__image} src={picture} alt="Размеры Картин на холсте"/>
            <div className={styles.size__container}>
                <h2 className={styles.size__title}>{title}</h2>
                <p className={styles.size__text}>{text}
                </p>
                <p className={styles.size__text}>
                    {text2}
                </p>
                <p className={styles.size__text}>
                    {text3}
                </p>
            </div>
        </section>
    );
}

export default SizePicture;