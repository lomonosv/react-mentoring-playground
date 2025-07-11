import { useState } from "react";
import DataProvider from "~/src/1-RenderingOptimizations/providers/DataProvider";



const GetDataComponent = ({selectedValue}: any) => {
    const [outputContent, setOutputContent] = useState<string>('');
    const [isFetching, setIsFetching] = useState<boolean>(true);

    const handleClick = async () => {
        setIsFetching(true);

        const data = await DataProvider.getData(selectedValue);

        setOutputContent(JSON.stringify(data));

        setIsFetching(false);
      };

    return (
        <>
        <button
        id="getDataButton1"
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
      </>
    )
}

export default GetDataComponent;
