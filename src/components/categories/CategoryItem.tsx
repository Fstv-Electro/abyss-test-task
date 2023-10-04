
import styles from './Categories.module.css'

export const CategoryItem= ({name} : {name: string}) => {
    return (
        <div className={styles.CategoryItem}>
            <p className={styles.CategoryName}>{name}</p>
            <button>add</button>
            <button>edit</button>
            <button>delete</button>
        </div>
    )
}