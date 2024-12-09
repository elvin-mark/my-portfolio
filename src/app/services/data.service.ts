import { Injectable } from '@angular/core';
import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  ngOnInit() {}

  getBlogs() {
    return data.blogs;
  }

  getCertifications() {
    return data.certifications;
  }

  getPapers() {
    return data.papers;
  }

  getEducationList() {
    return data.educationList;
  }

  getExperiences() {
    return data.experiences;
  }

  getProjects() {
    return data.projects;
  }
}
