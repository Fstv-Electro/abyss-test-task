import { useState } from 'react';
import { ICategoryList } from '../../types/CommonTypes';

import { CatItem } from "./CatItem"
import { categoriesData } from "./categoriesData"
import { useCategory } from '../../hooks/useCategory';
import styles from './Category.module.css';

function CatList() {
    const [catList, setCatList] = useState<ICategoryList>(categoriesData);
    const { addCategory, deleteCategory, editCategory } = useCategory();

    const handleAddCategory = (id: number, catBody: ICategoryList) => {
        const updated = addCategory(catList, id, catBody)
        setCatList(updated);
    }

    const handleEditCategory = (id: number, newCategory: ICategoryList) => {

        const updated = editCategory(catList, id, newCategory);
        setCatList(updated);
    }

    const handleDeleteCategory = (id: number) => {
        const updated = deleteCategory(catList, id);
        setCatList(updated);
    }

    return (
        <ul className={styles.CategoryList}>
            <CatItem key={catList.id} catList={catList} handleAddCategory={handleAddCategory} handleEditCategory={handleEditCategory} handleDeleteCategory={handleDeleteCategory} />
        </ul>
    )
};

export default CatList;