import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataReaderService } from '../../core/services/JSONReader';
import { provideHttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-jsonparse-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jsonparse-page.component.html',
  styleUrls: ['./jsonparse-page.component.css'] 
})
export class JsonparsePageComponent implements OnInit {
  users: any[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private dataReader: DataReaderService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataReader.getUsers().subscribe({
      next: (data) => {
        this.users = data.users;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Ошибка загрузки данных'; 
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}