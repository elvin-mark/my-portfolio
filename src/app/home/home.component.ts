import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/MyCVEnglish.pdf';
    link.download = 'Elvin_Resume.pdf';
    link.click();
  }

  contactMe() {
    const link = document.createElement('a');
    link.href = 'mailto:munoz.vega.em@gmail.com';
    link.click();
  }
}
