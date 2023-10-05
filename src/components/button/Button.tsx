import { IButtonInputProps } from '../../types/CommonTypes';

import styles from './Button.module.css';


// export const ButtonsAction = ({handleAdd, handleEdit, handleDelete, catBody}: IButtonInputProps) => {

//     return (
//         <div className={styles.BtnContainer}>
//             <button type='button' onClick={() => handleAdd({ body: catBody, categories: [] })}>add</button>
//             <button type='button' onClick={() => handleEdit()}>edit</button>
//             <button type='button' onClick={() => handleDelete()}>delete</button>
//         </div>
//     )
// }

// export const BtnAction = ({ handleClick, type, className} : { handleClick: () => any, type: string, className: string}) => {
//     return (
//         <button type="button" className={className} onClick={handleClick}>{type}</button>
//     )
// }