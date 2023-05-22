import React from 'react';
import styles from './Footer.module.scss'
import logo from '../../Images/footerLogo.svg'
import telegram from "../../Images/telegram.svg";
import whatsap from "../../Images/whatsap.svg";
import dzen from "../../Images/dzen.svg";
import youtube from "../../Images/youtube.svg";
import vk from "../../Images/vk.svg";
import cdek from "../../Images/Footer/cdek.svg"
import ems from "../../Images/Footer/ems.svg"

function Footer(props) {
    const linkWhatsApp = 'https://wa.me/79145647254?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%8F%20%D1%81%20%D0%92%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C...'
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__container}>
                    <img src={logo} alt="Art memory заказать портерт с доставкой по России"/>
                    <ul className={styles.footer__social}>
                        <li className={styles.footer__socialItem}>
                            <a target={"_blank"} href="https://t.me/artmemory_shop"><img src={telegram} alt=""/></a>
                        </li>
                        <li className={styles.footer__socialItem}>
                            <a target={"_blank"} href={linkWhatsApp}><img src={whatsap} alt=""/></a>
                        </li>
                        <li className={styles.footer__socialItem}>
                            <a target={"_blank"} href="https://zen.yandex.ru/id/623a07d34f338879642bd604"><img
                                src={dzen} alt=""/></a>
                        </li>
                        <li className={styles.footer__socialItem}>
                            <a target={"_blank"} href="https://www.youtube.com/channel/UCbChxyGw1P_PGJBhFtcGpQw"><img
                                src={youtube} alt=""/></a>
                        </li>
                        <li className={styles.footer__socialItem}>
                            <a target={"_blank"} href="https://vk.com/artmemory_shop"><img src={vk} alt=""/></a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__container}>
                    <p className={styles.footer__p}>Контакты:</p>
                    <a className={styles.footer__contact} href="tel:+79881373197">+7 (988) 137-31-97</a>
                    <a className={`${styles.footer__contact} ${styles.footer__contact_email}`}
                       href="malito:art_memory@list.ru">art_memory@list.ru</a>
                </div>
                <div className={styles.footer__container}>
                    <ul className={styles.footer__nav}>
                        <li><a className={styles.footer__nav_item} href="#">О нас</a></li>
                        <li><a className={styles.footer__nav_item} href="#">Стили</a></li>
                        <li><a className={styles.footer__nav_item} href="#">Галлерея</a></li>
                        <li><a className={styles.footer__nav_item} href="#">Сотрудничество</a></li>
                    </ul>
                </div>
                <div className={styles.footer__container}>
                    <p>Доставляем по РФ</p>
                    <div>
                        <img src={cdek} alt="Доставка портретов на заказ по России доставкой СДЕК"/>
                        <img src={ems} alt="Доставка портретов на заказ по России доставкой EMS"/>
                    </div>
                </div>
            </div>
            <div>
                <p>

                </p>
                <p>

                </p>
            </div>
        </footer>
    );
}

export default Footer;