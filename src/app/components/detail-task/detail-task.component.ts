import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss'],
})
export class DetailTaskComponent implements OnInit {

  @Input() taskModel: Task;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }
}
