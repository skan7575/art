import React from 'react';
import styles from './PictureStyle.module.scss'

function PictureStyle(props) {
    return (
        <section className={styles.picture}>
            <div className={styles.picture__container}>
                <h2 className={styles.picture__title}>Отличие стилизаций Картин на хослте</h2>
                <p className={styles.picture__text}>Существует множество различных стилей прорисовки фотографий, каждый из которых имеет свои уникальные
                    характеристики и приемы.</p>
                <div className={styles.picture__container_text}>
                    <p className={styles.picture__text}>Некоторые стили, например как Art Classic характеризуются точной прорисовкой с заменой фона, что
                        придаёт портрету невероятную легкость и невесомость. Стилизация Art Classic Pro прорабатывается
                        более детально и имеет ярко выраженные мазки кисти на портрете.</p>
                    <p className={styles.picture__text}>Oil Light и Oil Pro — это два стиля, которые воссоздают имитацию масляной живописи, но основное
                        отличие состоит в том, что Oil Pro рисуется с нуля, с детальной проработкой образа, а Oil Light
                        это
                        повтор фото под данную стилизацию.</p>
                </div>
                <div className={styles.picture__image_container}>
                    <img className={`${styles.picture__image} ${styles.picture__image_1}`} src='http://artmemory-rus.ru/Files/Styles/image%20215.jpg' alt=""/>
                    <img className={`${styles.picture__image} ${styles.picture__image_2}`} src='http://artmemory-rus.ru/Files/Styles/image%20216.jpg' alt=""/>
                    <img className={`${styles.picture__image} ${styles.picture__image_3}`} src='http://artmemory-rus.ru/Files/Styles/image%20219.jpg' alt=""/>
                    <img className={`${styles.picture__image} ${styles.picture__image_4}`} src='http://artmemory-rus.ru/Files/Styles/image%20218.jpg' alt=""/>
                    <img className={`${styles.picture__image} ${styles.picture__image_5}`} src='http://artmemory-rus.ru/Files/Styles/image%20217.jpg' alt=""/>
                </div>
            </div>
        </section>
    );
}

export default PictureStyle;