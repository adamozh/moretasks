import { Tag } from "./Tag";

export interface Task {
    id: number;
    name: string;
    done: boolean;
    tags: Tag[];
    date?: Date;
}