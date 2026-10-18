export type ProgrammeLevel = 'Diploma' | 'Degree';
export interface Programme { id: string; title: string; level: ProgrammeLevel; description: string; }
export interface CampusLocation { id: string; name: string; address: readonly string[]; mapQuery: string; }
