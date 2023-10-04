import { useState } from 'react';
import { TItem } from './types';
import { CategoryItem } from './CategoryItem';

type TCategoryList = {
    categories: {
        categoryItem?: {
            categoryItem?: TItem;
            serviceItem?: TItem;
        }
    }
}

const initialState = {
    categories: {},
}

export const Categories = () => {
    const [categoriesList, setCategoriesList] = useState<TCategoryList>(initialState);

    return (
        <>
            <CategoryItem name='Categories'/>
        </>
    )
}