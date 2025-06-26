import React, { useState } from 'react';
import HugeList from './components/HugeList';

const Playground = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      Selected value: { selectedValue }
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
      <HugeList onChange={ handleChange } />
    </div>
  );
};

export default Playground;
