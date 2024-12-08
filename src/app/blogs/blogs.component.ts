import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  blogs = [
    {
      img: '',
      title: 'Least Action Principle',
      description: '',
      link: '/blog?blogName=least-action-principal',
      tags: ['physics'],
    },
    {
      img: '',
      title: 'My journal in General Relativity',
      description: '',
      link: '/blog?blogName=general-relativity',
      tags: ['physics'],
    },
    {
      img: '',
      title: 'Harmonics in Physics',
      description: '',
      link: '/blog?blogName=harmonics',
      tags: ['physics'],
    },
    {
      img: '',
      title: 'Autodifferentiation',
      description: '',
      link: '/blog?blogName=autodiff',
      tags: ['ai'],
    },
  ];
  tags: string[] = [];
  selectedTag: string | null = null;
  filteredBlogs = [...this.blogs];

  ngOnInit() {
    const myTags: Set<string> = new Set();
    this.blogs.forEach((blog) => {
      blog.tags.forEach((tag) => myTags.add(tag));
    });
    this.tags = Array.from(myTags);
  }

  filterBlogs(tag: string) {
    this.selectedTag = tag;
    if (tag) {
      this.filteredBlogs = this.blogs.filter((blog) => blog.tags.includes(tag));
    } else {
      this.filteredBlogs = [...this.blogs];
    }
  }
}
