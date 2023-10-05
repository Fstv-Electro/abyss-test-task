import { useState } from 'react';
import {ICategoryInputProps } from '../../types/CommonTypes';
import styles from './Categories.module.css';

export const CategoryInput = ({handleCategory}: ICategoryInputProps) => {
    const [catBody, setCatBody] = useState('');
    
    return (
        <div className={styles.CategoryItem}>
            <input type="text" value={catBody} placeholder={`category name`} autoFocus className={styles.CategoryInput} onChange={(e) => setCatBody(e.target.value)} />
            <button type='button' onClick={() => {
                handleCategory({ body: catBody, categories: [] });
                setCatBody('');
            }}>Add</button>
        </div>
    )
};