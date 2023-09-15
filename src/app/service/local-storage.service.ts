import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public getSizw(): number {
    return localStorage.length;
  }

  public saveTask(key: string, task: Task) {
    let json = JSON.stringify(Task);
    localStorage.setItem(key, json);
  }

  public getTask(key: string): any {
    let json = localStorage.getItem(key);
    if (json != null) return JSON.parse(json) as Task;
    else return null;
  }

  public deleteTask(key: string) {
    localStorage.removeItem(key);
  }

  public clearAll() {
    localStorage.clear();
  }
}
