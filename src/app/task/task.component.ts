import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Task } from '../app.module';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  taskname: String = '';
  constructor(private taskservice: TaskserviceService) {}
  ngOnInit() {
    this.taskservice.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
  addtask() {
    const newtask = { taskname: this.taskname };
    this.taskservice.addtask(newtask).subscribe((task) => {
      this.tasks.push(task);
      this.taskname = '';
    });
  }

  deletetask(id: any) {
    this.taskservice.deletetask(id).subscribe((res) => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }
}
