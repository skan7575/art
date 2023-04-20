import React, {useEffect, useState} from 'react';
import logo from '../../Images/Art memory.svg'
import styles from './header.module.scss'
import {Link} from "react-router-dom";
import telegram from "../../Images/telegram.svg";
import whatsap from "../../Images/whatsap.svg";
import dzen from "../../Images/dzen.svg";
import youtube from "../../Images/youtube.svg";
import vk from "../../Images/vk.svg";
function Header(props) {
    const [open, setOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const closeMenu = () => {
        if(windowWidth <= 980) {
            document.body.style.overflow = !open ? 'hidden' : ''
            setOpen(!open)
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                {windowWidth <= 980
                    ?
                    <button onClick={closeMenu} className={open ? `${styles.header__close} ${styles.header__close__open}` : styles.header__close}></button>
                    : ''}

                <Link to='/'>
                    <img src={logo} alt="ART MEMORY - картины арты на заказ"/>
                </Link>
                <nav className={open ? `${styles.header__nav} ${styles.header__nav_open}` : styles.header__nav}>
                    <ul className={styles.header__list}>
                        <li className={styles.header__listItem}>Главная</li>
                        <li className={styles.header__listItem}>О нас</li>
                        <li className={styles.header__listItem}>Портреты</li>
                    </ul>
                    <ul className={styles.header__social}>
                        <a target={"_blank"} href="#"><img src={telegram} alt=""/></a>
                        <a target={"_blank"} href="#"><img src={whatsap} alt=""/></a>
                        <a target={"_blank"} href="#"><img src={dzen} alt=""/></a>
                        <a target={"_blank"} href="#"><img src={youtube} alt=""/></a>
                        <a target={"_blank"} href="#"><img src={vk} alt=""/></a>
                    </ul>
                        <span className={styles.header__span}>Контакты:</span>
                        <a className={styles.header__a} href="tel:+7-988-137-31-97">+7-988-137-31-97</a>
                        <a className={styles.header__a} href="mailto:art_memory@list.ru">art_memory@list.ru</a>
                </nav>
                <a className={styles.header__phone} href="tel:+7-988-137-31-97">{windowWidth <= 980 ? '' : '+7-988-137-31-97'}</a>
            </div>
        </header>
    );
}

export default Header;