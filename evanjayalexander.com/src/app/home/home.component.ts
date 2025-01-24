import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() active: boolean = false;
}
