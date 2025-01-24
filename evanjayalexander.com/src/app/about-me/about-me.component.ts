import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-me-component',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @Input() active: boolean = false;
}
