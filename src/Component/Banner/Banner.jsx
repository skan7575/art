import React from 'react';
import styles from "./Banner.module.scss";

import telegram from "../../Images/telegram.svg";
import whatsap from "../../Images/whatsap.svg";
import dzen from "../../Images/dzen.svg";
import youtube from "../../Images/youtube.svg";
import vk from "../../Images/vk.svg";

function Banner({h1, text, img}) {
    return (
        <main className={styles.main}>
            <ul className={styles.main__social}>
                <a target={"_blank"} href="https://t.me/artmemory_shop"><img src={telegram} alt=""/></a>
                <a target={"_blank"}
                   href={'https://wa.me/79145647254?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%8F%20%D1%81%20%D0%92%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0,%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C...'}><img
                    src={whatsap} alt=""/></a>
                <a target={"_blank"} href="https://zen.yandex.ru/id/623a07d34f338879642bd604"><img src={dzen}
                                                                                                   alt=""/></a>
                <a target={"_blank"} href="https://www.youtube.com/channel/UCbChxyGw1P_PGJBhFtcGpQw"><img src={youtube}
                                                                                                          alt=""/></a>
                <a target={"_blank"} href="https://vk.com/artmemory_shop"><img src={vk} alt=""/></a>
            </ul>
            <div className={styles.main__container}>
                <div className={styles.main__text}>
                    <h1 className={styles.main__title}>{h1}
                    </h1>
                    <p className={styles.main__title_about}>{text}</p>
                </div>
                <div className={styles.main__block}>
                    <img className={styles.main__image} src={img} alt=""/>
                </div>
            </div>
        </main>
    );
}

export default Banner;