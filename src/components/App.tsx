import { FC } from 'react';
import { Header } from './header';
import { MainNav } from './mainNav/mainNav';
import { CategoryList } from './categories';

import styles from './App.module.css';

export const App: FC = () => {
    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.MainContainer}>
                <CategoryList/>
                <MainNav/>
            </div>
        </div>
    )
}

