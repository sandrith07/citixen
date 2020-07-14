import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public static get Storage() : Task[] {
    let storage = localStorage.getItem('listask');
    return storage == null ? [] : <Task[]>JSON.parse(storage);
  }

  public static set Storage(listask: Task[]) {
    localStorage.setItem('listask', JSON.stringify(listask));
  }
}
