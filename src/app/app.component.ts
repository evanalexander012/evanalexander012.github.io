import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { NgIf, NgFor, KeyValuePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  imports: [MatSidenavModule, MatButtonModule, NgIf, NgFor, KeyValuePipe, FormsModule, ReactiveFormsModule, HomeComponent, AboutComponent, ResumeComponent, ProjectsComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'evanjayalexander.com';
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  pages: navButtons = {
    "home": { display: "Home", status: false },
    "about": { display: "About", status: false },
    "resume": { display: "Resume", status: false },
    // "projects": { display: "Projects", status: false }
  };
  
  navButtonsArray = Object.entries(this.pages);

  ngOnInit(): void {
    this.pages["home"].status = true;
    
  }

  ngAfterViewInit(): void {
    
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
  }
}
