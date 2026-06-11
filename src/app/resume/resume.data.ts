export interface ResumeContact {
  location: string;
  phone: string;
  email: string;
  website: string;
  websiteUrl: string;
}

export interface ResumeSkillCategory {
  label: string;
  items: string;
}

export interface ResumeJob {
  employer: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface ResumeProject {
  name: string;
  url: string;
  tech: string;
  description: string;
}

export interface ResumeEducation {
  school: string;
  location: string;
  degree: string;
  minor: string;
  date: string;
}

export interface ResumeCertification {
  name: string;
  issuer: string;
}

export interface Resume {
  name: string;
  title: string;
  contact: ResumeContact;
  summary: string;
  skills: ResumeSkillCategory[];
  experience: ResumeJob[];
  projects: ResumeProject[];
  education: ResumeEducation;
  certifications: ResumeCertification[];
}

export const RESUME: Resume = {
  name: 'Evan Alexander',
  title: 'Full-Stack Software Engineer',
  contact: {
    location: 'Denver, CO',
    phone: '(616) 634-0315',
    email: 'evanalexander012@gmail.com',
    website: 'evanjayalexander.com',
    websiteUrl: 'https://evanjayalexander.com',
  },
  summary:
    'Full-stack software engineer with 4 years of experience designing, building, and maintaining enterprise web applications using Angular, TypeScript, C#, ASP.NET Core, and SQL Server. Advanced from returning intern to full-time Product Engineer II at Crowe LLP. Expert in CI/CD pipelines, Agile Scrum, REST APIs, and AI-augmented engineering utilizing Anthropic Claude for feature development, advanced refactoring, and test automation. PSM I certified. B.S. in Computer Science & Engineering from Michigan State University.',
  skills: [
    {
      label: 'Languages',
      items:
        'C#, TypeScript, JavaScript, React, Angular, Python, SQL, HTML, CSS',
    },
    {
      label: 'Frameworks & Libraries',
      items: 'ASP.NET, .NET, Angular, REST APIs',
    },
    {
      label: 'Tools & Platforms',
      items: 'Git, GitHub, Azure DevOps, Microsoft Copilot, Claude, Linux',
    },
    {
      label: 'Methodologies',
      items:
        'Agile, Scrum, CI/CD, DevOps, Code Review, Unit Testing, Cross-functional Collaboration',
    },
  ],
  experience: [
    {
      employer: 'Crowe LLP',
      title: 'Product Engineer II',
      location: 'Remote',
      dates: 'June 2022 – Present',
      bullets: [
        'Develop and maintain full-stack features using Angular (TypeScript) and C# / ASP.NET for a business-critical tax-filing platform used firm-wide by Crowe accountants to file taxes across the firm’s client base.',
        'Established new CI/CD pipelines integrating SonarQube static code analysis, embedding automated code-quality and security scanning into the team’s build process.',
        'Collaborate with global development teams to align on feature delivery, resolve cross-system dependencies, and ensure product reliability.',
        'Integrate Microsoft Copilot and Claude LLMs to accelerate delivery, auto-generate unit tests, refactor legacy code, and improve documentation.',
        'Drive Agile Scrum ceremonies including sprint planning, backlog refinement, and retrospectives, contributing to consistent on-time delivery.',
      ],
    },
    {
      employer: 'Crowe LLP',
      title: 'Software Engineering Intern',
      location: 'Remote',
      dates: 'Summers 2020 & 2021',
      bullets: [
        'Returned for a second summer internship and earned a full-time offer as Product Engineer II based on consistent technical growth and production contributions.',
        'Built full-stack features in Angular (TypeScript) and C# / ASP.NET alongside senior engineers, contributing production code during both internships.',
      ],
    },
  ],
  projects: [
    {
      name: 'PackBuddy',
      url: 'https://packbuddy.net',
      tech: 'Angular, TypeScript, C#, ASP.NET',
      description:
        'Designed, built, and shipped a live web application that optimizes how carrying weight is distributed across members of a group on backpacking trips.',
    },
  ],
  education: {
    school: 'Michigan State University',
    location: 'East Lansing, MI',
    degree: 'B.S. in Computer Science & Engineering',
    minor: 'Minor in Entrepreneurship and Innovation',
    date: 'December 2022',
  },
  certifications: [
    {
      name: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
    },
  ],
};
