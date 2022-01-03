import React, { ChangeEvent } from "react";
import { ChevronDown } from "react-feather";

export default function Select({ id, value, options, onChange }: Props) {
  return (
    <div className="select">
      <select id={id} name={id} value={value} onChange={onChange}>
        {options.map(({ label, value }: Option) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown width={20} height={20} />
    </div>
  );
}

interface Option {
  label: string;
  value: string | number | undefined;
}

interface Props {
  id: string;
  value: string | number | undefined;
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
