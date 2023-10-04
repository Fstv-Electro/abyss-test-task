import { FC } from 'react';

export type TItem = {
    name: string;
    add: () => FC<string, any, any, void>;
    edit: () => FC<string, any, any, void>;
    delete: () => void;
}

