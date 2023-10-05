import {useState} from 'react'
import { ICategory } from '../../types/CommonTypes';
import { CategoryInput } from './InputCategory';
import { CategoryItem } from './CategiriesItem';

import styles from './Categories.module.css';


const initialState: Array<ICategory> = [
    {
        body: 'Categories',
        categories: [],
    },
]

export const CategoryList = () => {
    // const [categories, setCategories] = useState(initialState);
    const categories = initialState;
    // const handleCategory = (newCatBody: ICategory) => {
    //     setCategories(prev => [...prev, newCatBody]);
    // }
    

    return (
        <div>
            {/* <CategoryInput handleCategory={handleCategory} /> */}
            <div>
                {categories.map((item) => (
                    <div>
                        <CategoryItem catergory={item} />
                    </div>
                    ))}
            </div>
        </div>
    );
};





