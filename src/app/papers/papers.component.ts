import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-papers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './papers.component.html',
  styleUrl: './papers.component.scss',
})
export class PapersComponent {
  certifications: any[] = [];
  papers: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.certifications = this.dataService.getCertifications();
    this.papers = this.dataService.getPapers();
  }
}
