import './App.css';

import {Route, Routes} from "react-router-dom";
import styles from "./Pages/Page.scss"
import Main from "./Pages/Main";
import Layout from "./Component/Layout/Layout";
import NotFound from "./Component/404/NotFound";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";
import Partner from "./Pages/Partner/Partner";

function App() {
    return (

        <div className={styles.page}>
            {/*<ScrollToTop />*/}
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='/about-us' element={<AboutUsPage/>}></Route>
                    <Route path='/partner' element={<Partner/>}></Route>
                    <Route path='/*' element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
