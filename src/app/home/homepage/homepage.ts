import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Testimonials } from "../testimonials/testimonials";
import { Process } from "../process/process";
import { Pricing } from "../pricing/pricing";
import { ProjectsComponent } from "../projects-component/projects-component";
import { AnalysisBanner } from "../analysis-banner/analysis-banner";
import { AboutMeComponent } from '../about-me-component/about-me-component';

@Component({
  selector: 'app-homepage',
  imports: [Hero, Testimonials, Process, Pricing, ProjectsComponent, AnalysisBanner, AboutMeComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
