import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ResumeDocxService } from './resume-docx.service';
import { RESUME } from './resume.data';

@Component({
  selector: 'resume-component',
  standalone: true,
  imports: [NgFor, MatButtonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  readonly resume = RESUME;
  readonly phoneHref = `tel:${RESUME.contact.phone.replace(/[^0-9+]/g, '')}`;

  constructor(private readonly resumeDocxService: ResumeDocxService) {}

  projectDisplayUrl(url: string): string {
    return url.replace('https://', '');
  }

  downloadResume(): void {
    void this.resumeDocxService.download();
  }
}
