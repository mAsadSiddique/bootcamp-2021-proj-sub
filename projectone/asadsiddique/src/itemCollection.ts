import { itemTodo } from "./itemTodo";

export class itemCollection {
  public nextId: number = 1;

  public constructor(public items: itemTodo[] = []) {}

  public addTodo(task: string): void {
    let todo: itemTodo = new itemTodo(this.nextId, task, false);
    this.nextId++;
    this.items.push(todo);
  }

  public isCompleted(tsakId:number):void{
    
    let completed: itemTodo= this.items.find(item => item.id === tsakId);
    completed.isCompleted = true;

}

  public printDetails(): void {
    this.items.forEach((item) => console.log(item.printDetails()));
  }
}
