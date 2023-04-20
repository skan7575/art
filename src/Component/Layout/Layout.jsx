import React from 'react';
import {Outlet} from 'react-router-dom'
import styles from './Layout.module.scss'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Layout(props) {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </div>


    );
}

export default Layout;