export interface User {
  id: string;
  username: string;
}

export interface Question {
  id: number;
  complexity: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  createdAt: string;
  shortAnswer: string;
  longAnswer: string;
  createdBy: User;
  updatedAt: string;
  updatedBy: User;
  status: string;
  keywords: string[];
  images: string[];
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
  rate: number;
  answers: QuestionAnswer[];
  createdById: string | null;
  updatedById: string | null;
}

export interface Specialization {
  id: number;
  title: string;
  description: string;
  imageSrc: any;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionSpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
}

export interface QuestionAnswer {
  code: string;
}

export interface QuestionsResponse {
  data: Question[];
  limit: number;
  page: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  limit: number;
  page: number;
  total: number;
}
