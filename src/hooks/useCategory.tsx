import { ICategoryList } from "../types/CommonTypes";

export const useCategory = () => {
    const addCategory = (tree: ICategoryList, id: number, newCategory: ICategoryList): any => {
        if (tree.id === id) {
            tree.subCategories.push(newCategory);
            return tree;
        }

        const updated = tree.subCategories.map((item: ICategoryList) => addCategory(item, id, newCategory));
        return {...tree,  subCategories: updated}
    }

    const deleteCategory = (tree: any, id: number): ICategoryList => {
        if (tree.id === id) {
            return tree.subCategories.filter((item: ICategoryList) => item.id !== id);
        }
            const updated = tree.subCategories.map((item: ICategoryList) => deleteCategory(item, id)).filter((item: any) => item.id !== undefined);
            return {...tree,  subCategories: updated} 
    }

    return {addCategory, deleteCategory}
}