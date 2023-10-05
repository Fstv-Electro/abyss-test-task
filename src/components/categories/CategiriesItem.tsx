import { useState } from 'react';
import { ICategoryItemProps, ICategory } from '../../types/CommonTypes';
import { CategoryInput } from './InputCategory';

import styles from './Categories.module.css';

export const CategoryItem = ({ catergory }: ICategoryItemProps) => {
    const [isAdding, setIsAdding] = useState(false);
    const [catergories, setCategories] = useState(catergory.categories);

    const handleCategory = (newCategory: ICategory) => {
        setCategories(prev => [...prev, newCategory]);
        setIsAdding(false);
    };

    return (
        <div className={styles.CategoryItem}>
            <span>{catergory.body}</span>
            {isAdding && <CategoryInput handleCategory={handleCategory} />}
            {catergories.map((item) => (
                <CategoryItem catergory={item}/>
            ))}
            {isAdding ? (
                <button type='button' onClick={() => setIsAdding(false)}>
                    cancel
                </button>
            ) : (
                <button type='button' onClick={() => setIsAdding(true)}>
                    Add
                </button>
            )}
        </div>

    )
};