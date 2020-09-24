export type AppState = {
  // the currently "logged in" voter
  // currentVoter?: Voter;
  voters: Voter[];
  elections: Election[];
};

export type Voter = {
  // Voter data, login by email address
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state?: string;
  birthDate: string;
  email: string;
  phone: string;

  // electionIds that this user has voted in
  votedIn: number[];
};

// election create does a PUT w/ an election
// object containing all the Questions for this election
export type Election = {
  id: number;
  name: string;
  year?: string;
  description?: string;
  questions: Question[];
  voterIds: number;
};

export type Question = {
  id: number;
  content: string;
  yes: number;
  no: number;
};
