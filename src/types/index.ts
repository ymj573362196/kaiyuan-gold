export interface Product {
  id: number;
  name: string;
  year: string;
  weight: string;
  material: string;
  price: string;
  image: string;
  category: "panda" | "commemorative" | "investment" | "silver";
  description: string;
  issuer: string;
  specifications: ProductSpec[];
  collectibleValue: string;
  investmentAnalysis: string;
  tags: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
