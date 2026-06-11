import { Injectable } from '@angular/core';
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Tab,
  TabStopPosition,
  TabStopType,
  TextRun,
} from 'docx';
import { saveAs } from 'file-saver';
import { RESUME } from './resume.data';

@Injectable({ providedIn: 'root' })
export class ResumeDocxService {
  async download(): Promise<void> {
    const doc = this.buildDocument();
    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'Evan-Alexander-Resume.docx');
  }

  private buildDocument(): Document {
    const { contact } = RESUME;
    const contactLine = [
      contact.location,
      contact.phone,
      contact.email,
      contact.website,
    ].join(' | ');

    const children: Paragraph[] = [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: RESUME.name,
            bold: true,
            size: 32,
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: RESUME.title, size: 22 })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: contactLine, size: 20 })],
      }),
      this.sectionHeading('Professional Summary'),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: RESUME.summary, size: 20 })],
      }),
      this.sectionHeading('Technical Skills'),
      ...RESUME.skills.flatMap((category) => [
        new Paragraph({
          children: [
            new TextRun({ text: `${category.label}: `, bold: true, size: 20 }),
            new TextRun({ text: category.items, size: 20 }),
          ],
        }),
      ]),
      new Paragraph({ spacing: { after: 120 }, children: [] }),
      this.sectionHeading('Professional Experience'),
      ...RESUME.experience.flatMap((job) => [
        this.jobHeader(job.employer, job.location, job.dates),
        new Paragraph({
          children: [
            new TextRun({ text: `${job.title}`, italics: true, size: 20 }),
          ],
        }),
        ...job.bullets.map(
          (bullet) =>
            new Paragraph({
              bullet: { level: 0 },
              children: [new TextRun({ text: bullet, size: 20 })],
            }),
        ),
        new Paragraph({ spacing: { after: 80 }, children: [] }),
      ]),
      this.sectionHeading('Projects'),
      ...RESUME.projects.flatMap((project) => [
        new Paragraph({
          children: [
            new TextRun({ text: project.name, bold: true, size: 20 }),
            new TextRun({
              text: ` | ${project.url.replace('https://', '')} | ${project.tech}`,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: project.description, size: 20 })],
        }),
      ]),
      this.sectionHeading('Education'),
      this.jobHeader(
        RESUME.education.school,
        RESUME.education.location,
        RESUME.education.date,
      ),
      new Paragraph({
        children: [
          new TextRun({ text: RESUME.education.degree, size: 20 }),
        ],
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: RESUME.education.minor, size: 20 })],
      }),
      this.sectionHeading('Certifications'),
      ...RESUME.certifications.map(
        (cert) =>
          new Paragraph({
            children: [
              new TextRun({ text: cert.name, bold: true, size: 20 }),
              new TextRun({ text: ` – ${cert.issuer}`, size: 20 }),
            ],
          }),
      ),
    ];

    return new Document({
      sections: [{ children }],
    });
  }

  private sectionHeading(text: string): Paragraph {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 160, after: 80 },
      border: {
        bottom: {
          color: '000000',
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
      children: [
        new TextRun({
          text: text.toUpperCase(),
          bold: true,
          size: 22,
        }),
      ],
    });
  }

  private jobHeader(
    employer: string,
    location: string,
    dates: string,
  ): Paragraph {
    return new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({ text: employer, bold: true, size: 20 }),
        new TextRun({ text: ` | ${location}`, size: 20 }),
        new TextRun({ children: [new Tab()] }),
        new TextRun({ text: dates, size: 20 }),
      ],
    });
  }
}
