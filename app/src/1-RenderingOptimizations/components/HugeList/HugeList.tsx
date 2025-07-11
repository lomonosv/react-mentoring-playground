import React from 'react';

interface IProps {
  data: { itemPostfix: string };
  onChange: (value: string) => void;
}

const listLength = 3e3;

const HugeList = ({ data, onChange }: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const list = Array.from({ length: listLength }, (_, index) => (
    <label
      key={ index }
      className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 hover:bg-blue-50 transition cursor-pointer text-gray-700 text-sm"
    >
      <input
        name="huge-list"
        type="radio"
        value={ index + 1 }
        onChange={ handleChange }
        className="accent-blue-500 focus:ring-2 focus:ring-blue-400"
      />
      <span className="select-none">Select { data?.itemPostfix } { index + 1 }</span>
    </label>
  ));

  return (
    <div>
      <div className="mb-2 mt-0 text-gray-800 font-medium">Select an item from the list of { listLength } items:</div>
      <div className="h-40 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-inner divide-y divide-gray-100">
        { list }
      </div>
    </div>
  );
}

export default React.memo(HugeList);
