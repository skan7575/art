import React from 'react';
import image from '../../Images/Table/image1.jpg'
import image2 from '../../Images/Table/image2.jpg'
import image3 from '../../Images/Table/image3.jpg'
import image4 from '../../Images/Table/image4.jpg'
import styles from './TableImage.module.scss'
function TableImage(props) {
    return (
        <section className={styles.table}>
            <h2 className={styles.table__title}>Мы будем тебе полезны, вне зависимости от того, кто ты:</h2>
            <ul className={styles.table__list}>
                <li className={styles.table__listItem}>
                    <img className={styles.table__image} src={image} alt="Крупный бизнесмен, желающий продавать интерьерные картины оптом"/>
                    <p className={styles.table__text}>Крупный бизнесмен, желающий продавать интерьерные картины оптом</p>
                </li>
                <li className={styles.table__listItem}>
                    <img className={styles.table__image} src={image2} alt="Предприниматель, печатающий портреты на холсте"/>
                    <p className={styles.table__text}>Предприниматель, печатающий портреты на холсте</p>
                </li>
                <li className={styles.table__listItem}>
                    <img className={styles.table__image} src={image3} alt="Дизайнер, перед которым стоит задача оформить интерьерными картинами жилые объекты, офисы, гостиницы или рестораны"/>
                    <p className={styles.table__text}>Дизайнер, перед которым стоит задача оформить интерьерными картинами жилые объекты, офисы, гостиницы или рестораны</p>
                </li>
                <li className={styles.table__listItem}>
                    <img className={styles.table__image} src={image4} alt="Фотограф, художник или просто творческий человек"/>
                    <p className={styles.table__text}>Фотограф, художник или просто творческий человек</p>
                </li>
            </ul>
            <div className={styles.table__container}>
                <p className={styles.table__textPresentation}>Скачайте презентацию, чтобы узнать больше о сотрудничестве. Мы можем предоставить поддержку и
                    инструменты, необходимые для вывода вашего бизнеса на новый уровень.</p>
                <div className={styles.table__buttons}>
                    <button className={`${styles.table__button} ${styles.table__button_red}`}>Начать сотрудничество</button>
                    <button className={`${styles.table__button}`}>Скачать презентацию</button>
                </div>
            </div>
        </section>
    );
}

export default TableImage;