import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { NgIf, NgFor, KeyValuePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface navButtons {
  [name: string] : { display: string, status: boolean }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, NgIf, NgFor, KeyValuePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'evanjayalexander.com';

  pages: navButtons = {
    "home": { display: "Home", status: false },
    "about-me": { display: "About Me", status: false },
    "resume": { display: "Resume", status: false },
    "projects": { display: "Projects", status: false }
  };
  
  navButtonsArray = Object.entries(this.pages);

  ngOnInit(): void {
    this.pages["home"].status = true;
    
  }

  ngAfterViewInit(): void {
    
  }

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
