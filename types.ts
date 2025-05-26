
export interface ContactInfo {
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  location?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  specialization?: string;
  cgpa?: string;
  dates: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  details?: string[]; // For bullet points in description
  keySkills: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  location: string;
  projects: Project[];
  description?: string; 
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Activity {
  description: string;
}

export interface AdditionalInfoType {
  languages: string[];
  dob: string;
  awardsActivities: Activity[];
  hobbies: string[];
  areasOfInterest: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  profilePicUrl: string;
  contact: ContactInfo;
  summary: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  technicalSkills: SkillCategory[];
  certifications: Certification[];
  additionalInfo: AdditionalInfoType;
}
    