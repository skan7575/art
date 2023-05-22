import React from 'react';
import styles from './SizePicture.module.scss'
import img from '../../Images/Size/size.jpg'

function SizePicture(props) {
    return (
        <section className={styles.size}>
            <img className={styles.size__image} src={img} alt="Размеры Картин на холсте"/>
            <div className={styles.size__container}>
                <h2 className={styles.size__title}>Размеры Картин на холсте</h2>
                <p className={styles.size__text}>Размер картины в интерьере во многом зависит от размеров и планировки
                    помещения. Картина размером 60x60 см. может хорошо смотреться в небольшой комнате, а картина
                    размером 80x80 см. может лучше подойти для большего пространства.
                </p>
                <p className={styles.size__text}>
                    Следует учитывать расположение и пропорции картины, чтобы она дополняла общую эстетику комнаты.
                </p>
            </div>
        </section>
    );
}

export default SizePicture;