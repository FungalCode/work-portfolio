import { Component, signal } from '@angular/core';
import { Project, ProjectCardComponent } from '../project-card-component/project-card-component';

@Component({
  selector: 'app-projects-component',
  imports: [ProjectCardComponent],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css',
})
export class ProjectsComponent {
  projects = signal<Project[]>([
      {
        title: 'Jennifer Daniel',
        description: 'Custom design and development of a website for the physiotherapist Jennifer Daniel. The website features a modern, dark design with low visual load and four subpages. <br><br> Built with Angular, designed in Figma. <br> Content management via Strapi CMS, hosted with dockerized Nginx with Coolify.',
        images: ['/assets/images/jennifer-daniel/jennifer1.webp', '/assets/images/jennifer-daniel/jennifer2.webp', '/assets/images/jennifer-daniel/jennifer3.webp', '/assets/images/jennifer-daniel/jennifer4.webp'],
        websiteUrl: 'https://www.sport-dj-physio.at/'
      },
      {
        title: 'Isabella Zeitz',
        description: 'Custom design and development of a SPA for the recorder teacher Isabella Zeitz, including a friendly flyer-design for promotion. <br><br> Built with Angular, designed in Figma. <br> Contact Form with PHPMailer.',
        images: ['/assets/images/isabella-zeitz/isabella1.webp', '/assets/images/isabella-zeitz/isabella2.webp', '/assets/images/isabella-zeitz/isabella3.webp', '/assets/images/isabella-zeitz/isabella4.webp', '/assets/images/isabella-zeitz/isabella5.webp'],
        websiteUrl: 'https://isabella-zeitz.at/'
      },
  ]);
}
