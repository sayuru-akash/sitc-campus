'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Programme } from '@/types/content';
const ProgrammeSelection = createContext<{selectedId: string; selectProgramme: (id: string) => void} | null>(null);
export function ProgrammeSelectionProvider({children}: {children: ReactNode}) {
  const [selectedId, selectProgramme] = useState('');
  return <ProgrammeSelection value={{selectedId, selectProgramme}}>{children}</ProgrammeSelection>;
}
export function useProgrammeSelection() {
  const context = useContext(ProgrammeSelection);
  if (!context) throw new Error('Programme selection requires ProgrammeSelectionProvider');
  return context;
}
export function programmeLabel(programme: Programme) { return `${programme.title} - ${programme.level}`; }
