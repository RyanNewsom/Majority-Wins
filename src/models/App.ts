export type AppState = {
  items: Item[];
};

export type Item = {
  id: number;
  title: string;
};

export type Voter = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  birthDate: string;
  email: string;
  phone: string;
};

export type Question = {
  content: string;
  yesCount: number;
  noCount: number;
};

export type Election = {
  id: number;
  name: string;
  description: string;
  questions: Question[];
};
