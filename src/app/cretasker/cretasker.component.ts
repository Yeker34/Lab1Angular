import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule, 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Task {
  number: number;
  type: string;
  priority?: string;
  status: string;
  title: string;
  description?: string;
  actor?: string;
  creator: string;
  date: string;
  datech: string;
}

@Component({
  selector: 'app-cretasker',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cretasker.component.html',
  styleUrls: ['./cretasker.component.css']
})
export class CretaskerComponent {
  taskForm: FormGroup;
  tasks: Task[] = [];

  constructor(private builder: FormBuilder) {
    this.taskForm = this.builder.group({
      type: ['', Validators.required],
      priority: [''],
      status: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      actor: [''],
      creator: ['', Validators.required]
    });
    this.loadTasks();
  }

  private loadTasks(): void {
    const tasksData = sessionStorage.getItem('tasks');
    this.tasks = tasksData ? JSON.parse(tasksData) : [];
  }

  private saveTasks(): void {
    sessionStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  onSubmit(): void {
    if (this.taskForm.invalid) return;

    const newTask: Task = {
      ...this.taskForm.value,
      number: this.tasks.length + 1,
      date: new Date().toISOString(),
      datech: new Date().toISOString()
    };

    this.tasks.push(newTask);
    this.saveTasks();
    this.taskForm.reset();
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    // Обновляем номера задач
    this.tasks = this.tasks.map((task, i) => ({
      ...task,
      number: i + 1
    }));
    this.saveTasks();
  }
}