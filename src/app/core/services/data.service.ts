import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Делает сервис доступным глобально
})
export class DataService {
    constructor() { }

    getExampleData(): string[] {
        return ['Data1', 'Data2'];
    }
}