import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  generalBackgrounds = [
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmN2ViMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmNzU4YyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQxKSIvPjwvc3ZnPg==',
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAxMDAgNDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDdhZmYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDBmZjgwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPjwvc3ZnPg==',
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdyYWRpZW50MiIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2NmQ5ZWYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxZTgyNGMiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50MikiLz48L3N2Zz4=',
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdyYWRpZW50MyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkMDk0ZWEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmU5NDAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWRpZW50MykiLz48L3N2Zz4=',
  ];
  blogs: any[] = [];
  tags: string[] = [];
  selectedTag: string | null = null;
  filteredBlogs: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.blogs = this.dataService.getBlogs();
    this.filteredBlogs = [...this.blogs];
    const myTags: Set<string> = new Set();
    this.blogs.forEach((blog: any) => {
      blog.tags.forEach((tag: any) => myTags.add(tag));
    });
    this.tags = Array.from(myTags);
    this.blogs.forEach((e) => {
      let idx = Math.floor(Math.random() * this.generalBackgrounds.length);
      e.img = e.img || this.generalBackgrounds[idx];
    });
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
