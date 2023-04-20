import React from 'react';
import styles from './AboutProject.module.scss'
import aboutPicture from '../../../Images/about.jpg'
import zakazIcon from '../../../Images/Icon/zakaz.svg'
import op from '../../../Images/Icon/op.svg'
import maket from '../../../Images/Icon/sgl.svg'
import printer from '../../../Images/Icon/pcht.svg'
import izg from '../../../Images/Icon/izg.svg'
import dostavka from '../../../Images/Icon/dost.svg'
function AboutProject(props) {
    return (
        <section className={styles.project}>
            <h2 className={styles.project__title}>
                Как мы работаем
            </h2>
            <div className={styles.project__wrapper}>
                <div className={styles.flex__left}>
                    <ul className={styles.project__list}>
                        <li><p>Мы считаем, что искусство должно быть доступным, вдохновляющим и отражающим время, в котором мы живем!</p></li>
                        <li><p>Мы стремимся создавать красивые картины, содержательные и отражающие индивидуальность наших заказчиков.</p></li>
                        <li><p>Мы увлечены созданием значимых и впечатляющих произведений искусства </p></li>
                        <li><p>Мы считаем, что лучшее искусство создается, когда художник и зритель собираются вместе, чтобы поделиться своим опытом и своим видением</p></li>
                        <li><p>Мы стремимся создавать не просто картины, а настоящие произведения искусства, которые соответствуют потребностям нашего зрителя</p></li>

                    </ul>
                    <img className={styles.project__image} src={aboutPicture} alt=""/>
                </div>
                <ul className={styles.flex__right}>
                    <li className={styles.project__listIcon}>
                        <img src={zakazIcon} alt=""/>
                        <div>
                            <h3 className={styles.project__titleH}>Оформление заказа</h3>
                            <p>Заполняете свои контактные данные: номер телефона, E-mail и город. Так же рекомендуется сразу отправить фото (желательно несколько).</p>
                        </div>
                    </li>
                    <li className={styles.project__listIcon}>
                        <img src={op} alt="Оплата заказа картины"/>
                        <div>
                            <h3 className={styles.project__titleH}>Оплата</h3>
                            <p>После утверждения фото и всех пожеланий, вы вносите предоплату 50 или 100%, после чего мы приступаем к отрисовке макета.</p>
                        </div>
                    </li>
                    <li className={styles.project__listIcon}>
                        <img src={maket} alt=""/>
                        <div>
                            <h3 className={styles.project__titleH}>Согласование макета</h3>
                            <p>Макет отправляем вам на утверждение. Если нужно, вносим корректировки. Только после утверждения эскиза, мы отправляем его на печать.</p>
                        </div>
                    </li>
                    <li className={styles.project__listIcon}>
                        <img src={printer} alt=""/>
                        <div>
                            <h3 className={styles.project__titleH}>Печать</h3>
                            <p>Свои работы печатаем только оригинальными, пигментными чернилами! Используем качественные хлопковые холсты. Они экологичны, не имеют запаха и сохраняют красочность картины надолго.</p>
                        </div>
                    </li>
                    <li className={styles.project__listIcon}>
                        <img src={izg} alt=""/>
                        <div>
                            <h3 className={styles.project__titleH}>Изготовление</h3>
                            <p>Готовый, уже напечатанный холст, натягиваем на деревянный подрамник, сделанный из клеёной сосновой рейки (без бортика) Заднюю часть картины проклеиваем маскировочной лентой.</p>
                        </div>
                    </li>
                    <li className={styles.project__listIcon}>
                        <img src={dostavka} alt=""/>
                        <div>
                            <h3 className={styles.project__titleH}>Доставка</h3>
                            <p>Перед отправкой — картина прочно упаковывается. Отправить работу возможно в любую точку мира. Почтой России или курьерской службой СДЭК. Так же, возможна отправка любым удобным для вас способом: автобусом, поездом, такси.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    );
}

export default AboutProject;