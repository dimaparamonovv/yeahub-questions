import React from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SearchFilter: React.FC<Props> = ({ value, onChange }) => (
  <div className="filterBlock">
    <input
      type="text"
      className="filterInput"
      placeholder="Введите запрос ..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
