import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-papers',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './papers.component.html',
  styleUrl: './papers.component.scss',
})
export class PapersComponent {
  certifications: any = [
    {
      title: '日本語能力試験N１/Japanese Language Proficiency Test N1',
      organization: 'Japan Educational Exchanges and Services',
      date: new Date(2024, 7),
      description: '',
      link: 'https://www.jlpt.jp/about/levelsummary.html',
    },
    {
      title: '基本情報技術者 / Fundamental Information Technology Engineer',
      organization: 'IPA: Information-technology Promotion Agency, Japan',
      date: new Date(2024, 11),
      description: '',
      link: 'https://www.ipa.go.jp/shiken/kubun/fe.html',
    },
  ];
  papers: any = [
    {
      title:
        'Exploiting the transient behavior of thermocapillary convection flows to enhance non-contact mesoscale manipulation',
      authors: 'Johan Quispe, Elvin Muñoz, Emir Vela',
      journal: 'Applied Physics Letters',
      year: 2016,
      link: 'https://aip.scitation.org/doi/10.1063/1.4963159',
    },
    {
      title:
        'Optimizing the speed of single infrared-laser-induced thermocapillary flows micromanipulation by using design of experiments',
      authors:
        'Elvin Muñoz, Johan Quispe, Pierre Lambert, Aude Bolopion, Ronald Terrazas, Stéphane Régnier, Emir Vela',
      journal: 'Journal of Micro-Bio Robotics',
      year: 2017,
      link: 'https://hal.archives-ouvertes.fr/hal-02963645',
    },
    {
      title:
        'Single particle manipulation/sorting through the transient response of thermocapillary convection flows',
      authors: 'J. E. Quispe, J. C. Inga, E. M. Muñoz, S. Régnier, E. Vela',
      journal:
        '2016 International Conference on Manipulation, Automation and Robotics at Small Scales (MARSS)',
      year: 2016,
      link: 'https://ieeexplore.ieee.org/document/7561730',
    },
    {
      title:
        'Closed-loop selective manipulation of multiple microparticles by controlling the transient regime of Marangoni flows',
      authors: 'E. M. Muñoz, J. E. Quispe, E. Vela',
      journal:
        '2016 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
      year: 2016,
      link: 'https://ieeexplore.ieee.org/document/7759754',
    },
    {
      title:
        'Laser-induced thermocapillary flow manipulation of microparticles with obstacle avoidance in a non-patterned fluidic environment',
      authors: 'E. M. Muñoz, J. E. Quispe, S. Régnier, E. Vela',
      journal:
        '2017 International Conference on Manipulation, Automation and Robotics at Small Scales (MARSS)',
      year: 2017,
      link: 'https://ieeexplore.ieee.org/document/8001939',
    },
    {
      title: 'Hand rehabilitation using Soft-Robotics',
      authors: 'A. A. Reymundo, E. M. Muñoz, M. Navarro, E. Vela, H. I. Krebs',
      journal:
        '2016 6th IEEE International Conference on Biomedical Robotics and Biomechatronics (BioRob)',
      year: 2016,
      link: 'https://ieeexplore.ieee.org/document/7523708',
    },
  ];
}
