import type { QuestionSkill } from "@/entities/question/model/types";

import { ChipGroup } from "@/features/filter/ui/ChipGroup";

interface Props {
  value: number[];
  options: QuestionSkill[];
  onChange: (val: number[]) => void;
  loading?: boolean;
}

export const SkillsFilter: React.FC<Props> = ({
  value,
  options,
  onChange,
  loading,
}) => (
  <ChipGroup
    value={value}
    options={options}
    getOptionLabel={(opt) => opt.title}
    getOptionValue={(opt) => opt.id}
    onChange={onChange}
    label="Навыки"
    loading={loading}
    collapseCount={5}
  />
);
