import { Component, Input } from '@angular/core';

@Component({
  selector: 'projects-component',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() active: boolean = false;
}
