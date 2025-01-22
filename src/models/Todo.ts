export class Todo {
    done: Boolean;
    constructor(public id:number, public text:string){
        this.done= false;
    }
}