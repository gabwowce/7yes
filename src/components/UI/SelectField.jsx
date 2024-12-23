import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const SelectField = ({
  label,
  placeholder,
  options = [],
  value,
  onChange,
  fullWidth = false,
}) => {
  return (
    <div className={`select-fiels ${fullWidth ? 'w-full' : 'w-1/2'}`}>
      {label && (
        <label htmlFor={label}>
          {label}
        </label>
      )}
      <div className='relative'>
        <ChevronDownIcon className="arrow-icon select-icon" />
        <select
            id={label}
            value={value || ""}
            onChange={onChange}
            style={{ color: value ? "var(--primary-text-color)" : "var(--gray-placeholder-color)" }}
            >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
            ))}
        </select>
      </div>
      
    </div>
  );
};

export default SelectField;
