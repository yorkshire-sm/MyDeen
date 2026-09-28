export interface Center {
  id: string;
  name: string;
  city: string;
  country: string;
  continent?: 'Europe' | 'North America' | 'Asia' | 'Oceania' | 'Africa';
  region: 'UK & Europe' | 'North America' | 'Pakistan & South Asia' | 'Middle East & Africa' | 'Asia Pacific' | string;
  stateProvince?: string;
  address: string;
  postalCode?: string;
  phone: string;
  email: string;
  category?: string;
  verification?: string;
  sourceUrl?: string;
  facilities: string[];
  directionsUrl?: string;
  prayerTimesUrl?: string;
  notes?: string;
  isHQ?: boolean;
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  university?: string;
  city: string;
  contact?: string;
  joinedYear: number;
}

export interface Zimmedar {
  id: string;
  name: string;
  title: string;
  country: string;
  region: 'UK & Europe' | 'North America' | 'Pakistan & South Asia' | 'Middle East & Africa' | 'Asia Pacific';
  city: string;
  email: string;
  phoneWhatsApp: string;
  departmentScope: string;
  volunteersCount: number;
  volunteers: Volunteer[];
}

export interface Course {
  id: string;
  title: string;
  track: 'Short Courses' | 'LYF (English)' | 'FOA (Urdu)' | 'Inspirational';
  duration: string;
  schedule: string;
  language: 'English' | 'Urdu' | 'Bilingual';
  mode: 'Online (Zoom/LMS)' | 'Hybrid' | 'On-Campus';
  instructor: string;
  description: string;
  syllabus: string[];
  targetAudience: string;
  isPopular?: boolean;
  status: 'Open for Registration' | 'Starting Soon' | 'On-Demand';
}

export interface EventItem {
  id: string;
  title: string;
  category: 'University' | 'Youth Circle' | 'Workshop' | 'Travel & Retreat' | 'Webinar';
  date: string;
  time: string;
  location: string;
  country: string;
  city: string;
  speaker: string;
  description: string;
  seatsTotal: number;
  seatsRegistered: number;
  isFeatured?: boolean;
  agenda?: string[];
}

export interface ActivitySlide {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  stats: string;
  location: string;
  imageTheme: 'emerald' | 'cyan' | 'amber' | 'indigo' | 'purple';
}

export interface MilestoneActivity {
  id: string;
  title: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  quarter: string;
  year: number;
  category: 'Campus Outreach' | 'Spiritual Growth' | 'Community Service' | 'Digital & Media' | 'Youth Welfare';
  description: string;
  impactMetric: string;
  partner?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: 'Youth Guidance' | 'Character & Tazkiyah' | 'Islamic Knowledge' | 'Sunnah & Etiquette';
  language: 'English' | 'Urdu' | 'Both';
  pages: number;
  description: string;
  pdfUrl?: string;
  topics: string[];
  coverColor: string;
}

export interface AmbassadorSubmission {
  id: string;
  fullName: string;
  email: string;
  whatsapp: string;
  university: string;
  major: string;
  yearOfStudy: string;
  city: string;
  country: string;
  motivation: string;
  submittedAt: string;
}

export interface TravelConnectSubmission {
  id: string;
  fullName: string;
  email: string;
  whatsapp: string;
  homeCity: string;
  destinationCountry: string;
  destinationCity: string;
  targetUniversity?: string;
  travelDate?: string;
  departureDate?: string;
  purpose?: string;
  supportNeeded: string | string[];
  notes?: string;
  submittedAt: string;
}

export type TravelAssistanceSubmission = TravelConnectSubmission;
