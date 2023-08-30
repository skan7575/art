import React, {useEffect, useState} from 'react';
import logo from '../../Images/Art memory.svg'
import styles from './header.module.scss'
import {Link, useLocation} from "react-router-dom";
import telegram from "../../Images/telegram.svg";
import whatsap from "../../Images/whatsap.svg";
import dzen from "../../Images/dzen.svg";
import youtube from "../../Images/youtube.svg";
import vk from "../../Images/vk.svg";


function Header(props) {
    const linkWhatsApp = 'https://wa.me/79145647254?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%8F%20%D1%81%20%D0%92%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C...'
    const [open, setOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation()
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open ? 'hidden' : '';
        };

        handleOverflow();

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                {windowWidth <= 980
                    ?
                    <button onClick={() => {
                        setOpen(!open)
                    }}
                            className={open ? `${styles.header__close} ${styles.header__close__open}` : styles.header__close}></button>
                    : ''}

                <Link to='/'>
                    <img src={logo} alt="ART MEMORY - картины арты на заказ"/>
                </Link>
                <nav className={open ? `${styles.header__nav} ${styles.header__nav_open}` : styles.header__nav}>
                    <ul className={styles.header__list}>
                        <li><Link onClick={() => setOpen(false)} className={styles.header__listItem}
                                  to='/'> Главная </Link></li>
                        <li><Link onClick={() => setOpen(false)} className={styles.header__listItem} to='about-us'> Наша
                            история </Link></li>
                        <li><Link onClick={() => setOpen(false)} className={styles.header__listItem} to='partner'> Сотрудничество </Link></li>
                        <li><a rel="noreferrer" target='_blank' href={linkWhatsApp}
                               className={styles.header__listItem}>Связаться</a></li>
                    </ul>
                    <ul className={styles.header__social}>
                        <a target={"_blank"} href="https://t.me/artmemory_shop"><img src={telegram} alt=""/></a>
                        <a target={"_blank"} href={linkWhatsApp}><img src={whatsap} alt=""/></a>
                        <a target={"_blank"} href="https://zen.yandex.ru/id/623a07d34f338879642bd604"><img src={dzen}
                                                                                                           alt=""/></a>
                        <a target={"_blank"} href="https://www.youtube.com/channel/UCbChxyGw1P_PGJBhFtcGpQw"><img
                            src={youtube} alt=""/></a>
                        <a target={"_blank"} href="https://vk.com/artmemory_shop"><img src={vk} alt=""/></a>
                    </ul>
                    <span className={styles.header__span}>Контакты:</span>
                    <a className={styles.header__a} href="tel:+7-988-137-31-97">+7-988-137-31-97</a>
                    <a className={styles.header__a} href="mailto:art_memory@list.ru">art_memory@list.ru</a>
                </nav>
                <a className={styles.header__phone}
                   href="tel:+7-988-137-31-97">{windowWidth <= 980 ? '' : '+7-988-137-31-97'}</a>
            </div>
        </header>
    );
}

export default Header;