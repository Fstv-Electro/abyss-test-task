import { FC } from 'react';
import { Header } from './header';
import { MainNav } from './mainNav/mainNav';
import CatList from './CatList/CatList';

import styles from './App.module.css';

export const App: FC = () => {
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.MainContainer}>
                <CatList/>
                <MainNav/>
            </div>
        </div>
    )
}

