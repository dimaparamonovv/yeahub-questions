import React from "react";

import "./FilterSidebar.css";

import { SearchFilter } from "./SearchFilter";
import { SpecializationsFilter } from "./SpecializationsFilter";
import { SkillsFilter } from "./SkillsFilter";
import { DifficultyFilter } from "./DifficultyFilter";
import { RateFilter } from "./RateFilter";

import type { FilterState } from "../model/useFilter";
import type {
  Specialization,
  QuestionSkill,
} from "@/entities/question/model/types";

interface Props {
  filterState: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  specializations: Specialization[];
  specsLoading: boolean;
  skills: QuestionSkill[];
  skillsLoading: boolean;
  onReset: () => void;
}

export const FilterSidebar: React.FC<Props> = ({
  filterState,
  onChange,
  specializations,
  specsLoading,
  skills,
  skillsLoading,
  onReset,
}) => {
  return (
    <aside className="filterSidebar card">
      <SearchFilter
        value={filterState.search}
        onChange={(val) => onChange({ search: val })}
      />

      <SpecializationsFilter
        value={filterState.specializations}
        options={Array.isArray(specializations) ? specializations : []}
        onChange={(val) => onChange({ specializations: val })}
        loading={specsLoading}
      />

      <SkillsFilter
        value={filterState.skills}
        options={Array.isArray(skills) ? skills : []}
        onChange={(val) => onChange({ skills: val })}
        loading={skillsLoading}
      />

      <DifficultyFilter
        value={filterState.difficulty}
        onChange={(val) => onChange({ difficulty: val })}
      />

      <RateFilter
        value={filterState.rate}
        onChange={(val) => onChange({ rate: val })}
      />

      <button className="resetFiltersBtn" onClick={onReset}>
        Сбросить фильтры
      </button>
    </aside>
  );
};
