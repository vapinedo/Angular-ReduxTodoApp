export class Todo {
  public id: number;
  public text: string;
  public isCompleted: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = new Date().getTime();
    this.isCompleted = false;
  }
}
