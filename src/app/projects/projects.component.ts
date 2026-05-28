import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';

export interface Project {
  name: string;
  tagline: string;
  url: string;
  description: string;
  tech: string[];
  images?: { src: string; alt: string }[];
  showVisitLink?: boolean;
}

@Component({
  selector: 'projects-component',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      name: 'Pack Buddy',
      tagline: 'Backpacking Trip Planner',
      url: 'https://packbuddy.net',
      description:
        'Pack Buddy helps your group balance gear across hikers, track pack weight, and export a clean distribution before you hit the trail. Plan trips locally or sign in to sync and share.',
      tech: ['Angular', 'TypeScript', '.NET', 'SQL', 'Azure'],
      showVisitLink: true,
      images: [
        {
          src: 'assets/projects/pack-buddy-landing.png',
          alt: 'Pack Buddy landing page — Fair pack weight for group backpacking',
        },
        {
          src: 'assets/projects/pack-buddy-trip.png',
          alt: 'Pack Buddy trip planner — gear inventory and pack breakdown',
        },
      ],
    },
    {
      name: 'evanjayalexander.com',
      tagline: 'Personal Portfolio',
      url: 'https://evanjayalexander.com',
      description:
        'This site — an Angular portfolio with home, about, projects, and resume sections, built with Angular Material and server-side rendering.',
      tech: ['Angular', 'TypeScript', 'SCSS', 'Angular Material'],
      showVisitLink: false,
    },
  ];
}
