import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.projects = this.dataService.getProjects();
  }
}
