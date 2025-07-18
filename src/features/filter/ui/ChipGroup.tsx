import { useState } from "react";

interface ChipGroupProps<T, Option> {
  value: T[];
  options: Option[];
  getOptionLabel: (opt: Option) => React.ReactNode;
  getOptionValue: (opt: Option) => T;
  onChange: (val: T[]) => void;
  label?: string;
  loading?: boolean;
  collapseCount?: number;
}

export function ChipGroup<T, Option>({
  value,
  options,
  getOptionLabel,
  getOptionValue,
  onChange,
  label,
  loading,
  collapseCount,
}: ChipGroupProps<T, Option>) {
  const [showAll, setShowAll] = useState(false);

  const displayOptions =
    collapseCount && !showAll ? options.slice(0, collapseCount) : options;

  const handleChipClick = (val: T) => {
    onChange(
      value.includes(val) ? value.filter((v) => v !== val) : [...value, val]
    );
  };

  const hasCollapse = collapseCount && options.length > collapseCount;

  return (
    <div className="filterBlock">
      {label && <span className="filterLabel">{label}</span>}
      <div className="filterChipsGroup">
        {loading ? (
          <div style={{ padding: "10px 0" }}>Загрузка...</div>
        ) : (
          displayOptions.map((opt) => {
            const optionValue = getOptionValue(opt);
            return (
              <button
                key={String(optionValue)}
                type="button"
                className={`filterChip${
                  value.includes(optionValue) ? " selected" : ""
                }`}
                aria-pressed={value.includes(optionValue)}
                onClick={() => handleChipClick(optionValue)}
              >
                {getOptionLabel(opt)}
              </button>
            );
          })
        )}
      </div>
      {hasCollapse && (
        <button
          type="button"
          className="showAllBtn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Скрыть" : "Показать все"}
        </button>
      )}
    </div>
  );
}
