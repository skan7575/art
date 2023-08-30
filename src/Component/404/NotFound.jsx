import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import bg from '../../Images/404/notfound.png'
import styles from './404.module.scss'
function NotFound(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const xhr = new XMLHttpRequest();
    console.log(xhr.DONE);
    return (
        <div className={styles.bg}>
            <div className={styles.page}>
                <div className={styles.page__wrapper}>
                    <h1 className={styles.page__title}>Страница не найдена...</h1>
                    <p className={styles.page__text}>Вы находитесь здесь потому, что запрашиваемая страница не существует или была перемещена по другому адресу</p>
                    <Link className={styles.page__button} to={'/'}>На главную</Link>
                </div>
                <img className={styles.page__404} src={bg} alt="404 страница не найдена"/>
            </div>
        </div>

    );
}

export default NotFound;