import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements DoCheck{

    public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

    constructor() {}

    ngDoCheck() {
            this.setLocalStorage();
      }
    
    ngOnInit(): void { }

    public setEmitTaskList(event:string){
          // console.log(event);
          this.taskList.push({task:event, checked:false});
    }

    public deleteItemTaskList(event: number){
      this.taskList.splice(event,1)
    }

    public deleteAllTaskList(){
      const confirm = window.confirm("Você Deseja Realmente Apagar tudo?")
      if(confirm){
        this.taskList = [];
      }
    }

  public validationInput(event: string, index: number){

      if(!event.length){
              const confirm = window.confirm("Task vazia deseja delegar ?")

              if(confirm){
                  this.deleteItemTaskList(index)
              }
        }
      }


    public setLocalStorage(){
        if(this.taskList){
          this.taskList.sort( (first, last)=> Number(first.checked) - Number(last.checked))
          localStorage.setItem("list", JSON.stringify(this.taskList));
      }
      }
}
