import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { PapersComponent } from './papers/papers.component';
import { BlogContentComponent } from './blogs/components/blog-content/blog-content.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'papers', component: PapersComponent },
  { path: 'blogs', component: BlogsComponent },
  {
    path: 'blog',
    component: BlogContentComponent,
  },
  { path: 'contact', component: ContactComponent },
];
