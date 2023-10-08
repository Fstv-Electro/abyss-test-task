import { useState } from 'react';
import { ICategoryListProps } from "../../types/CommonTypes"
import styles from './Category.module.css';



export const CatItem = ({ catList, handleAddCategory, handleDeleteCategory, handleEditCategory }: ICategoryListProps) => {
    const [showInput, setShowInput] = useState(false);
    const [catBody, setCatBody] = useState<string>(catList.body);
    const [isEdit, setIsEdit] = useState(false);
    const randomId = Math.floor(Math.random() * 1000000000);

    const handleAdd = () => {
        const newCategory = {
            id: randomId,
            body: catBody,
            level: catList.level + 1,
            subCategories: [],
        };

        handleAddCategory(catList.id, newCategory);
        setShowInput(false);
    }

    const handleEdit = () => {
        const newCategory = {
            id: catList.id,
            body: catBody,
            level: catList.level + 1,
            subCategories: catList.subCategories,
        };
        handleEditCategory(catList.id, newCategory);
        setIsEdit(false)
    }


    return (
        <li className={styles.CategoryContainer}>
            {isEdit ? (
                <div className={`${catList.body && styles.CategoryItemContainer}`}>
                    <input type="text" className={styles.ItemText}
                        autoFocus
                        value={catBody}
                        onChange={(e) => setCatBody(e.target.value)}/>
                    <div className={styles.BtnContainer}>
                        <button type="button" className={styles.Btn} onClick={handleEdit}>+</button>
                        <button type="button" className={styles.Btn} onClick={() => setIsEdit(false)}>x</button>
                    </div>
                </div>
            ) : (
            <div className={`${catList.body && styles.CategoryItemContainer}`}>
                <span className={styles.ItemText}>{catList.body}</span>
                {/* { showInput && <input type="text" className={styles.ItemText} autoFocus onChange={(e) => setCatBody(e.target.value)}/> } */}
                {catList.body? (
                    <div className={styles.BtnContainer}>
                        <button type="button" className={styles.Btn} onClick={() => setShowInput(true)}>+</button>
                                {catList.level !== 0 ? (
                                    <>
                                        <button type="button" className={styles.Btn} onClick={() => setIsEdit(true)}>/</button>
                                        <button type="button" className={styles.Btn} onClick={() => handleDeleteCategory(catList.id)}>x</button>
                                    </>
                                ) : null}
                    </div>
                ): null}
            </div>
            )}
            <div className={styles.ItemContainer}>                
                {
                    catList?.subCategories?.map((item) => (
                        <ul className={styles.CategoryList}>
                            <CatItem key={item.id} handleDeleteCategory={handleDeleteCategory} handleEditCategory={handleEditCategory} handleAddCategory={handleAddCategory} catList={item} />
                        </ul>
                    ))
                }
                {showInput && 
                    <div className={styles.CategoryItemAddingContainer}>
                        <input type="text" className={styles.ItemText} autoFocus onChange={(e) => setCatBody(e.target.value)} />
                        <div className={styles.BtnContainer}>
                            <button type="button" className={styles.Btn} onClick={handleAdd}>+</button>
                            <button type="button" className={styles.Btn} onClick={() => setShowInput(false)}>x</button>
                        </div>
                    </div>
                }
            </div>
            

        </li>
    )
}