import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComputer, faGuitar, faMountain } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [MatCardModule, MatListModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faComputer = faComputer;
  faGuitar = faGuitar;
  faMountain = faMountain;
}
