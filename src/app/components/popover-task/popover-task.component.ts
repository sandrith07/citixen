import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { prioridad, Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { ModalController } from '@ionic/angular';

@Component({
  templateUrl: './popover-task.component.html',
  styleUrls: ['./popover-task.component.scss'],
})
export class PopoverTaskComponent implements OnInit {

  listPrioridad: prioridad[] = [ "alta" , "media" , "baja"];
  taskModel = new Task();
  constructor(
    private taskService: TaskService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }


  onSubmit() {
    TaskService.list.push(this.taskModel);
    this.taskService.listask = TaskService.list;   
    this.modalController.dismiss();
  }

  close() {
    this.modalController.dismiss();
  }
}
