import React from 'react';
import styles from './List.module.scss'
import icon1 from '../../Images/List/icon1.svg'
import icon2 from '../../Images/List/icon2.svg'
import icon3 from '../../Images/List/icon3.svg'
import icon4 from '../../Images/List/icon4.svg'
import icon5 from '../../Images/List/icon5.svg'
import icon6 from '../../Images/List/icon6.svg'
function List(props) {
    return (
        <section className={styles.list}>
            <h2 className={styles.list__title}>У нас, в мастерской «Art Memory»:</h2>
            <ul className={styles.list__ul}>
                <li className={styles.list__li}>
                    <img className={styles.list__icon} src={icon1} alt="Работы премиального на холсте"/>
                    <div className={styles.list__container}>
                        <h3 className={styles.list__title_sub}>Работы премиального качества за стандартную рыночную цену</h3>
                        <p className={styles.list__text}>Тут нет никаких подвохов: мы достигаем этого за счет специализации на картинах и четко
                            выстроенных в течении 7 лет процессов.</p>
                    </div>
                </li>
                <li className={styles.list__li}>
                    <img className={styles.list__icon} src={icon2} alt="Изготовление картин, точно соответствующих макету"/>
                    <div className={styles.list__container}>
                        <h3 className={styles.list__title_sub}>Изготовление картин, точно соответствующих макету</h3>
                        <p className={styles.list__text}>Мы достигаем невероятной насыщенности и яркости красок за счет разработанной и проверенной нами технологии.</p>
                    </div>
                </li>
                <li className={styles.list__li}>
                    <img className={styles.list__icon} src={icon3} alt="Наши сотрудники – перфекционисты"/>
                    <div className={styles.list__container}>
                        <h3 className={styles.list__title_sub}>Наши сотрудники – перфекционисты</h3>
                        <p className={styles.list__text}>Мы уверены, что задник картины должен выглядеть аккуратно, а также обеспечивать картине дополнительную защиту от повреждений. Именно внимание к мелочам отличает мастеров от непрофессионалов.</p>
                    </div>
                </li>
                <li className={styles.list__li}>
                    <img className={styles.list__icon} src={icon4} alt="Высокая скорость выполнения работ"/>
                    <div className={styles.list__container}>
                        <h3 className={styles.list__title_sub}>Высокая скорость выполнения работ</h3>
                        <p className={styles.list__text}>Срок изготовления – СУТКИ с момента заказа. Возможность производства до 100 картин в сутки.</p>
                    </div>
                </li>
                <li className={styles.list__li}>
                    <img className={styles.list__icon} src={icon5} alt="Собственное специализированное производство в г. Краснодар"/>
                    <div className={styles.list__container}>
                        <h3 className={styles.list__title_sub}>Собственное специализированное производство в г. Краснодар</h3>
                        <p className={styles.list__text}>Мы не работаем с другими заказами, как, например, типографии. Мы производим ТОЛЬКО картины.</p>
                    </div>
                </li>
                <li className={styles.list__li}>
                    <img className={styles.list__icon} src={icon6} alt="Качественные материалы"/>
                    <div className={styles.list__container}>
                        <h3 className={styles.list__title_sub}>Качественные материалы</h3>
                        <p className={styles.list__text}>Здесь расчет прост: нам просто невыгодно работать на низкосортных холстах и красках. Хорошо сделанная работа прибавляет заказов, а халтурная – снижает количество клиентов. Поэтому наши работы печатаются на холсте с хлопковой основой оригинальными пигментными чернилами, не путать с китайскими аналогами.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default List;