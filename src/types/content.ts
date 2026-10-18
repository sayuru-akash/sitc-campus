export type ProgrammeLevel = 'Diploma' | 'Degree';
export interface Programme {
  id: string;
  title: string;
  level: ProgrammeLevel;
  description: string;
}
export interface CampusLocation {
  id: string;
  name: string;
  label: string;
  locality: string;
  country: string;
  postalCode?: string;
  phones: readonly { label: string; href: string }[];
  appointment?: string;
  address: readonly string[];
  mapQuery: string;
}
