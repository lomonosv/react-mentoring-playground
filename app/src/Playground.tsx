import React, { useEffect, useState, useCallback, useMemo } from 'react';
import HugeList from './components/HugeList';
import DataProvider from './providers/DataProvider';

const data = {
  itemPostfix: 'Option',
};

const Playground = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [outputContent, setOutputContent] = useState<string>('');
  const [isFetching, setIsFetching] = useState<boolean>(true); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleChange = useCallback((value: string) => {
    setSelectedValue(value);
  }, []);

  const handleClick = async () => {
    if (isFetching) return;

    setIsFetching(true); 

    const data = await DataProvider.getData(outputContent);

    setOutputContent(JSON.stringify(data));

    setIsFetching(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl flex flex-col gap-6">
        <div>
          <span className="block text-gray-700 text-lg font-semibold mb-2">Input value: <span className="text-blue-600">{ inputValue || 'null' }</span></span>
          <label className="block text-gray-600 mb-1" htmlFor="inputField">Input a value:</label>
          <input
            id="inputField"
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Type something..."
          />
        </div>
        <div>
          <span className="block text-gray-700 text-lg font-semibold">Selected value: <span className="text-purple-600">{ selectedValue || 'null' }</span></span>
        </div>
        <HugeList
          data={ data }
          onChange={ handleChange }
        />
        <button
          id="getDataButton"
          onClick={handleClick}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition"
        >
          Get Data
        </button>
        <div id="dataOutput" className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <span className="block text-gray-700 font-semibold mb-2">Data:</span>
          <div className="w-full overflow-x-auto">
            <pre id="dataOutputContent" className="min-w-full whitespace-pre text-sm text-gray-800">{ isFetching ? 'Loading...' : outputContent }</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
