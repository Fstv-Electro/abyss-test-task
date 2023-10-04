import { FC } from 'react';
import styles from './mainNav.module.css';

export const MainNav: FC = () => {

    return (
        <>
            <button className={styles.ArrowTop} onClick={() => window.scrollBy(0, -100)}>^</button>
            <button className={styles.ArrowRight} onClick={() => window.scrollBy(100, 0)}>^</button>
            <button className={styles.ArrowBottom} onClick={() => window.scrollBy(0, 100)}>^</button>
            <button className={styles.ArrowLeft} onClick={() => window.scrollBy(-100, 0)}>^</button>
        </>
    )
}