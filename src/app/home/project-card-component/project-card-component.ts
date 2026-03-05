import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input, OnDestroy, OnInit, signal } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  images: string[];
  websiteUrl: string;
}

@Component({
  selector: 'app-project-card-component',
  imports: [NgOptimizedImage],
  templateUrl: './project-card-component.html',
  styleUrl: './project-card-component.css',
})

export class ProjectCardComponent implements OnInit, OnDestroy {
  project = input.required<Project>(); // Use input() function
  
  protected imageIndex = signal(0);
  private intervalId?: any;

  activeImage = computed(() => this.project().images[this.imageIndex()]);

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.imageIndex.update(i => (i + 1) % this.project().images.length);
    }, 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}