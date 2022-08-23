import React, { useEffect } from 'react';

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      key={value}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((op) => (
        <option key={op.value} value={op.value}>
          {op.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
