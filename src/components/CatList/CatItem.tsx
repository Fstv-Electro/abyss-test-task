import { useState } from 'react';
import { ICategoryListProps } from "../../types/CommonTypes"
import styles from './Category.module.css';


export const CatItem = ({ catList, handleAddCategory, handleDeleteCategory }: ICategoryListProps) => {
    const [showInput, setShowInput] = useState(false);
    const [catBody, setCatBody] = useState<string>('');

    const handleAdd = () => {
        const newCategory = {
            id: Math.floor(Math.random() * 1000000000),
            body: catBody,
            subCategories: [],
        };

        handleAddCategory(catList.id, newCategory);
        setShowInput(false);
    }



    return (
        <div className={styles.CategoryContainer}>
            <div className={`${catList.body && styles.CategoryItemContainer}`}>
                <span className={styles.ItemText}>{catList.body}</span>
                { showInput && <input type="text" autoFocus onChange={(e) => setCatBody(e.target.value)}/> }
                {showInput ? (
                    <div className={styles.BtnContainer}>
                        <button type="button" className={styles.Btn} onClick={handleAdd}>+</button>
                        <button type="button" className={styles.Btn} onClick={() => setShowInput(false)}>x</button>
                    </div>
                ): catList.body? (
                    <div className={styles.BtnContainer}>
                        <button type="button" className={styles.Btn} onClick={() => setShowInput(true)}>+</button>
                        <button type="button" className={styles.Btn}>/</button>
                        <button type="button" className={styles.Btn} onClick={() => handleDeleteCategory(catList.id)}>x</button>
                    </div>
                ): null}
            </div>
            <div className={styles.ItemContainer}>
                {
                    catList?.subCategories?.map((item) => (
                        <div >
                            <CatItem key={item.id} handleDeleteCategory={handleDeleteCategory} handleAddCategory={handleAddCategory} catList={item} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}