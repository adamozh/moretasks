import { Tag } from "./Tag";

export interface Task {
    name: string;
    done: boolean;
    tags: Tag[];
    date?: Date;
}