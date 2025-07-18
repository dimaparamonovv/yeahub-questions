import { DIFFICULTY_LEVELS } from "@/shared/constants/constants";

import { ChipGroup } from "@/features/filter/ui/ChipGroup";

interface Props {
  value: number[];
  onChange: (val: number[]) => void;
}

export const DifficultyFilter: React.FC<Props> = ({ value, onChange }) => (
  <ChipGroup
    value={value}
    options={DIFFICULTY_LEVELS}
    getOptionLabel={(opt) => opt.label}
    getOptionValue={(opt) => opt.value}
    onChange={onChange}
    label="Уровень сложности"
  />
);
