import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [HttpClientModule, MarkdownModule],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.scss',
})
export class BlogContentComponent {
  blogName: string = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParamMap.subscribe((e) => {
      this.blogName = e.get('blogName') || '';
    });
  }

  ngOnInit() {}

  onLoad(event: any) {}

  onError(event: any) {}
}
