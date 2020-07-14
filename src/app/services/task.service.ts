import { Injectable, EventEmitter } from '@angular/core';
import { Task } from '../models/task';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public taskCreated = new EventEmitter<Task[]>();
  public static list: Task[] = LocalStorageService.Storage;
  constructor() { }

  public get listask() {
    return LocalStorageService.Storage;
  }

  public set listask(listask: Task[]) {
    LocalStorageService.Storage = listask;
    TaskService.list = LocalStorageService.Storage;
    this.taskCreated.emit(this.listask);
  }  
}
