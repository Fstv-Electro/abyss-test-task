export interface ICategory {
    id: number;
    body: string;
    categories: Array<ICategory>;
}

export interface ICategoryItemProps {
    category: ICategory;
    categoryList: Array[ICategory];
    handleCategory: (newCategory: ICategory) => void;
}

export interface ICategoryInputProps {
    handleCategory: (newCategory: ICategory) => void;
    handleIsAdding: (status: boolean) => void;
}

export interface IButtonInputProps {
    // handleCategory: (newCategory: ICategory) => void;
    handleEdit: (newCategory: ICategory) => void;
    handleDelete: (id: number) => void;
    handleIsAdding: (status: boolean) => void;
    category: ICategory;
}


export interface ICategoryList {
    id: number;
    body: string;
    subCategories: Array<ICategoryList>;
}

export interface ICategoryListProps {
    catList: ICategoryList;
    handleAddCategory: (id: number, catBody: ICategoryList) => void;
    handleDeleteCategory: (id: number) => void;
}

export interface IAddCategoryProps {
    tree: ICategoryList;
    id: number;
    newCategory: ICategoryList;
}