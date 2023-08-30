import React  from "react";
import styles from './Popup.module.scss'

const Popup = ({children, close}) => {


    return (
        <div className={styles.popup}>
            <div className={styles.popup__container}>
                <button className={styles.popup__close} onClick={close}></button>
                <div className="popup-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;