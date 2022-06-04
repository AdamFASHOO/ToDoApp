export class ToDo {
    id: number;
    task: string;
    completed: boolean;

    constructor(id: number, task: string, completed: boolean) {
        this.id=id;
        this.task=task;
        this.completed=completed;
    }
}