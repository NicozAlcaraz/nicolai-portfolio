// --- Types ---

export type Page = 'home' | 'projects' | 'about';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface CVData {
  name: string;
  title: string;
  profile: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    phone: string;
  };
  skills: {
    category: string;
    list: string[];
  }[];
  projects: Project[];
  experience: {
    role: string;
    company: string;
    period: string;
    points: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
  achievements: {
    name: string;
    event: string;
    year: string;
  }[];
}


export const cvData: CVData = {
  name: "Nicolai Alcaraz",
  title: "Computer Science Undergraduate | Backend Developer",
  profile: "Motivated 4th-year Computer Science student specializing in Data Science, with strong proficiency in multiple programming languages and hands-on experience with a wide range of data tools and technologies. Skilled in data analysis, machine learning, and software development.",
  contact: {
    email: "nicolaijechrirafael.alcaraz@gmail.com",
    linkedin: "https://www.linkedin.com/in/nicolai-jechri-rafael-alcaraz-956889288/",
    github: "https://github.com/NicozAlcaraz",
    phone: "+63 916 485 0824",
  },
  skills: [
    { category: "Languages", list: ["Python", "Java", "JavaScript", "TypeScript", "C#"] },
    { category: "Frameworks & Tools", list: ["Django", "React.js/ts", "Flutter", "Docker", "Celery"] },
    { category: "Data & Databases", list: ["SQL", "Data Analysis", "Machine Learning"] }
  ],
  projects: [
    {
      title: "FROGress",
      description: "A frog-themed 2D platformer that gamifies personal goals and achievements.",
      tags: ["Flutter"],
      link: "https://github.com/NicozAlcaraz/FROGress-Prototype",
    },
    {
      title: "TechSauce Payroll & Attendance",
      description: "A full-stack payroll and attendance platform integrating ZKTeco devices, overtime rules, and role-based dashboards for admins, owners, and employees.",
      tags: ["Python", "Django", "React.js", "PostgreSQL", "Celery", "Docker"],
      link: "https://github.com/cyrus-bcc/Software_Engineering",
    },
    {
      title: "NBA Box Scores Dashboard",
      description: "Streamlit app that fetches NBA box scores and visualizes live & historical stats.",
      tags: ["Python", "Streamlit"],
      link: "https://nba-boxscores.streamlit.app",
    },
    {
      title: "Predictive Model Trends: Predicting Early Detection of\n" +
          "Alzheimer's Disease",
      description: "This report presents the correlation found for predicting early detection of Alzheimer’s\n" +
          "disease using the SAS Viya Workbend for Learner®\n" +
          ". It also explores three datasets of\n" +
          "different periods (7 months ago, 1 year ago, and 5 years ago) to identify differences in their\n" +
          "approach to prediction.",
      tags: ["Python", "SAS", "SAS Viya"],
      link: "https://dam-cdn.sas.orangelogic.com/AssetLink/h248733ri1bv1c0na726k8mh5r165mw4/team-data-aces-curiosity-cup-2025.pdf",
    },
    {
      title: "Jose Rizal Archives - A Roadmap",
      description: "An interactive website that guides users through the life of the Philippine National Hero, his achievements, detours, up until his sacrifice for his motherland.",
      tags: ["Javascript", "React"],
      link: "https://nicozalcaraz.github.io/rizal-roadmap/",
    }
  ],
  experience: [
    {
      role: "Back-end Developer - Intern",
      company: "Legion Technologies, Inc",
      period: "2023 - 2024",
      points: [
        "Worked with a team of developers on enterprise-level projects.",
        "Developed web applications and created robust, scalable solutions.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Santo Tomas",
      period: "2022 - Present",
    },
    {
      degree: "Senior High School",
      institution: "Technological Institute of the Philippines - Quezon City",
      period: "2020 - 2022",
    },
    {
      degree: "Junior High School",
      institution: "International Learning Academy",
      period: "2016 - 2020",
    },
  ],
  certifications: [
    {
      name: "Databases and SQL for Data Science with Python",
      issuer: "IBM",
      year: "2024",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
    },
  ],
  achievements: [
     {
        name: "SAS Curiosity Cup Winner",
        event: "Data Preparation",
        year: "2025"
     }
  ]
};