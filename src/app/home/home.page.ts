import { Component, OnInit, NgZone } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { ModalController } from '@ionic/angular';
import { PopoverTaskComponent } from '../components/popover-task/popover-task.component';
import { DetailTaskComponent } from '../components/detail-task/detail-task.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  listask: Task[] = [];
  constructor(
    private taskService: TaskService,
    public modalController: ModalController,
    public ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.listask = this.taskService.listask;
    this.taskService.taskCreated.subscribe( item => {
      this.ngZone.run(() => {
        this.listask = this.taskService.listask;
      });
    })
  }

  completeTask(index: number) {
    this.listask[index].estado = true;
    this.taskService.listask = this.listask;
  }

  
  deleteTask(index: number) {
    this.listask.splice(index,1);
    this.taskService.listask = this.listask;
  }

  deleteAllTasks() {
    this.taskService.listask = this.listask.filter(item => item.estado != true);
  }

  CountTaskTerminated() {
    return this.listask.filter(item => item.estado == true).length > 0 ?  true : false;
  }

  CountTaskNOTerminated() {
    return this.listask.filter(item => item.estado == false).length > 0 ?  true : false;
  }

  async newTask() {
    const popover = await this.modalController.create({
      component: PopoverTaskComponent,
    });
    return await popover.present();
  }

  async detailTask(item: Task) {
    const popover = await this.modalController.create({
      component: DetailTaskComponent,
      componentProps: {
        'taskModel': item
      }
    });
    return await popover.present();
  }

}
