import logo from './logo.svg';
import './App.css';

import {Route, Routes} from "react-router-dom";
import styles from "./Pages/Page.scss"
import Main from "./Pages/Main";
import Layout from "./Component/Layout/Layout";
function App() {
  return (
      <div className={styles.page}>
        {/*<ScrollToTop />*/}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
