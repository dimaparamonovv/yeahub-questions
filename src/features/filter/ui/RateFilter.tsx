import { RATES } from "@/shared/constants/constants";

import { ChipGroup } from "@/features/filter/ui/ChipGroup";

interface Props {
  value: number[];
  onChange: (val: number[]) => void;
}

export const RateFilter: React.FC<Props> = ({ value, onChange }) => (
  <ChipGroup
    value={value}
    options={RATES}
    getOptionLabel={(rate) => rate}
    getOptionValue={(rate) => rate}
    onChange={onChange}
    label="Рейтинг"
  />
);
