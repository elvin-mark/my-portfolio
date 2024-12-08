import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      img: 'assets/projects/loss_landscape.png',
      alt: 'PyTorch Trainer',
      title: 'PyTorch Simple Trainer',
      description:
        'This tool will allow you to train any computer vision model against custom datasets.',
      link: 'https://github.com/elvin-mark/pytorch_trainer',
    },
    {
      img: 'assets/projects/jade_logo.png',
      alt: 'JADE',
      title: 'JADE',
      description:
        'This is a simple framework to build and train neural networks in Java. This framework was written from scratch so no extra dependencies are needed.',
      link: 'https://github.com/elvin-mark/jade',
    },
    {
      img: 'assets/projects/monday-app.png',
      alt: 'Monday App',
      title: 'Monday App',
      description: 'This is a simple RAG application.',
      link: 'https://github.com/elvin-mark/monday-app',
    },
    {
      img: 'assets/projects/movie-recommender.png',
      alt: 'Movie Recommender',
      title: 'Movie Recommender',
      description:
        'Simple movie recommender that leverages a lightweight text embedding deep learning model to search for similar movies from a clustered movie list.',
      link: 'https://github.com/elvin-mark/movie-recommender',
    },
    {
      img: 'assets/projects/lets-learn-korean.png',
      alt: "Let's learn korean!",
      title: 'Learning Korean App',
      description:
        'Simple web application that helps beginners learn the Korean language through flashcards and short quizzes.',
      link: 'https://github.com/elvin-mark/korean-learning-app',
    },
  ];
}
