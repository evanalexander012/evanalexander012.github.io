import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { ResumeDocxService } from './resume-docx.service';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let resumeDocxService: jasmine.SpyObj<ResumeDocxService>;

  beforeEach(async () => {
    resumeDocxService = jasmine.createSpyObj('ResumeDocxService', ['download']);
    resumeDocxService.download.and.returnValue(Promise.resolve());

    await TestBed.configureTestingModule({
      imports: [ResumeComponent],
      providers: [
        { provide: ResumeDocxService, useValue: resumeDocxService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call download on ResumeDocxService when downloadResume is clicked', () => {
    component.downloadResume();
    expect(resumeDocxService.download).toHaveBeenCalled();
  });
});
