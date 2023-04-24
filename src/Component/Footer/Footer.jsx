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
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__container}>
                    <img src={logo} alt="Art memory заказать портерт с доставкой по России"/>
                    <ul className={styles.footer__social}>
                        <li className={styles.footer__socialItem}>
                            <a href=""><img src={telegram} alt="Telegram"/></a>
                        </li>
                        <li className={styles.footer__socialItem}>
                            <a href=""><img src={whatsap} alt="Telegram"/></a>
                        </li>
                        <li className={styles.footer__socialItem}>
                            <a href=""><img src={dzen} alt="Telegram"/></a>
                        </li>
                        <li className={styles.footer__socialItem}>
                            <a href=""><img src={youtube} alt="Telegram"/></a>
                        </li>
                        <li className={styles.footer__socialItem}>
                            <a href=""><img src={vk} alt="Telegram"/></a>
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