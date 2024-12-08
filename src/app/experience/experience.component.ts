import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  educationList = [
    {
      title: 'BSc. Engineering Physics',
      organization: 'National University of Engineering',
      location: 'Lima, Peru',
      duration: '2011-2016',
      remarks: [],
    },
    {
      title: 'Japanese Language School',
      organization: '大阪大学日本語日本教育センター',
      location: 'Tokyo, Japan',
      duration: '2017-2018',
      remarks: [],
    },
    {
      title: 'BSc. Computer Science',
      organization: 'Tokyo Institute of Technology',
      location: 'Tokyo, Japan',
      duration: '2018-2022',
      remarks: [],
    },
  ];
  experiences = [
    {
      role: 'Researcher',
      organization: 'UTEC (Universidad de Ingeniería y Tecnología)',
      location: 'Peru',
      duration: '2016 - 2017',
      responsibilities: [
        'Developed software in C++ for controlling an optical setup to manipulate microrobots by creating and controlling convection flows.',
        'Utilized the Artificial Potential method to improve microrobot control and enable obstacle avoidance.',
      ],
    },
    {
      role: 'Researcher',
      organization: 'Tokyo Institute of Technology',
      location: 'Japan',
      duration: '2021 - 2022',
      responsibilities: [
        'Successfully trained neural networks using SAM optimization and assessed their performance.',
        'Studied the impact of hyperparameters on training outcomes.',
        'Investigated loss landscapes and parameter trajectories using the Digits dataset.',
        'Utilized the Weights and Biases platform for tracking training progress.',
        'Leveraged GPU clusters provided by the university lab for efficient training.',
      ],
    },
    {
      role: 'Software Developer',
      organization: 'Rakuten Mobile',
      location: 'Japan',
      duration: '2022 - Present',
      responsibilities: [
        'Developed and tested scalable microservices in Go, integrating with NoSQL and relational databases, with robust CI/CD pipelines and containerized deployments using Docker.',
        'Designed and implemented API backends leveraging modern backend frameworks, integrating with cloud services for authentication, email, storage, and database management.',
        'Analyzed and enhanced third-party software by documenting and modifying open-source components, ensuring alignment with project requirements.',
        'Built and optimized high-performance communication modules for internal systems, focusing on concurrency, scalability, and system reliability',
      ],
    },
  ];
}
