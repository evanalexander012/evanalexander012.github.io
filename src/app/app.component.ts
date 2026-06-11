import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor, KeyValuePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
interface navButtons {
  [name: string] : { display: string, status: boolean }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, NgIf, NgFor, KeyValuePipe, HomeComponent, AboutComponent, ResumeComponent, ProjectsComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'evanjayalexander.com';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  pages: navButtons = {
    home: { display: 'Home', status: false },
    about: { display: 'About', status: false },
    projects: { display: 'Projects', status: false },
    resume: { display: 'Resume', status: false },
  };
  
  navButtonsArray = Object.entries(this.pages);

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngOnInit(): void {
    this.pages['home'].status = true;
    this.updateHomeScrollLock();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.document.body.classList.remove('home-page');
    this.document.documentElement.classList.remove('home-page');
  }

  // Used to avoid pipe from auto sorting alphabetically
  keepOrder = () => 0;

  setPageStatus(pageName: string): void {
    this.navButtonsArray.forEach(btn => {
      if (btn[0] != pageName) {
        btn[1].status = false;
      } else {
        btn[1].status = true;
      }
    });
  }

  onNavButtonClick(pageName: string) {
    this.setPageStatus(pageName);
    this.updateHomeScrollLock();
  }

  private updateHomeScrollLock(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const isHome = this.isActivePage('home');
    this.document.body.classList.toggle('home-page', isHome);
    this.document.documentElement.classList.toggle('home-page', isHome);
  }

  isActivePage(pageName: string): boolean {
    return this.pages[pageName]?.status ?? false;
  }
}
