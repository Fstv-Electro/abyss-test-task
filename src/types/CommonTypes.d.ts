export interface ICategory {
    body: string;
    categories: Array<ICategory>;
}

interface ICategoryItemProps {
    catergory: ICategory;
}

export interface ICategoryInputProps {
    handleCategory: (newCategory: ICategory) => void;
}

export interface IButtonInputProps {
    handleAdd: (newCategory: ICategory) => void;
    handleEdit: (newCategory: ICategory) => void;
    handleDelete: (newCategory: ICategory) => void;
    catBody: string;
}