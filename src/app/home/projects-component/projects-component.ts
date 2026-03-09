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
        description: 'Bereits im ersten Quartal nach dem Launch erzielte die Website der Physio&shy;therapeutin Jennifer Daniel über 3.000 Seitenaufrufe von mehr als 200 potenziellen Patienten. <br><br> Dank einer klaren Navigation und Kommunikation gelangen die viele Besucher schnell zur Termin&shy;buchungs&shy;seite, die als wichtigste Conversion-Seite dient.',
        images: ['/assets/images/jennifer-daniel/jennifer1.webp', '/assets/images/jennifer-daniel/jennifer2.webp', '/assets/images/jennifer-daniel/jennifer3.webp', '/assets/images/jennifer-daniel/jennifer4.webp'],
        websiteUrl: 'https://www.sport-dj-physio.at/'
      },
      {
        title: 'Isabella Zeitz',
        description: 'Dank einer gezielten Werbekampagne, die eine neue Webseite und stimmische Flyer enthielt, konnte die Musikpädagogin Isabella Zeitz neue Schülerinnen und Schüler finden.',
        images: ['/assets/images/isabella-zeitz/isabella1.webp', '/assets/images/isabella-zeitz/isabella2.webp', '/assets/images/isabella-zeitz/isabella3.webp', '/assets/images/isabella-zeitz/isabella4.webp', '/assets/images/isabella-zeitz/isabella5.webp'],
        websiteUrl: 'https://isabella-zeitz.at/'
      },
  ]);
}
