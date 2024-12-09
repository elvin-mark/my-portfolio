import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  educationList: any[] = [];
  experiences: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.educationList = this.dataService.getEducationList();
    this.experiences = this.dataService.getExperiences();
  }
}
