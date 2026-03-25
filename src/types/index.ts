export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  image?: string;
}

export interface SiteSettings {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  locationDetail: string;
  primaryColor: string;
  heroImage: string;
  aboutText: string;
  phone: string;
  email: string;
  donationAccount: string;
}
