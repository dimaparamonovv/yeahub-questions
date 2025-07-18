import { useState } from "react";

export type FilterState = {
  search: string;
  specializations: number[];
  skills: number[];
  difficulty: number[];
  rate: number[];
};

const defaultState: FilterState = {
  search: "",
  specializations: [],
  skills: [],
  difficulty: [],
  rate: [],
};

export function useFilter(initial: Partial<FilterState> = {}) {
  const [filters, setFilters] = useState<FilterState>({
    ...defaultState,
    ...initial,
  });

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    setFilters((f) => ({ ...f, [key]: value }));
  };

  const resetFilters = () => setFilters(defaultState);

  return { filters, updateFilter, resetFilters };
}
