export interface Task {
    name: string;
    done: boolean;
    tags: string[];
    date?: Date;
}