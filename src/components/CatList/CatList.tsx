import { useState } from 'react';
import { ICategoryList } from '../../types/CommonTypes';

import { CatItem } from "./CatItem"
import { categoriesData } from "./categoriesData"
import { useCategory } from '../../hooks/useCategory';

function CatList() {
    const [catList, setCatList] = useState<ICategoryList>(categoriesData);
    const { addCategory, deleteCategory } = useCategory();

    const handleAddCategory = (id: number, catBody: ICategoryList) => {
        const updated = addCategory(catList, id, catBody)
        setCatList(updated);
    }

    const handleDeleteCategory = (id: number) => {
        const updated = deleteCategory(catList, id);
        setCatList(updated);
    }

    return (
        <div>
            <CatItem key={catList.id} catList={catList} handleAddCategory={handleAddCategory} handleDeleteCategory={handleDeleteCategory} />
        </div>
    )
};

export default CatList;