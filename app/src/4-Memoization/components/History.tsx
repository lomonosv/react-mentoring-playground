import React from 'react';

interface IProps {
  records: string[];
}

const History = ({ records }: IProps) => {
  console.log('📜 History render', records);

  return (
    <div>
      <h3>History (last 5)</h3>
      { records.map((record, index) => (
        <div key={ index }>
          { record.action }, { record.time }s, { record.currentPause }
        </div>
      )) }
      {/* Render History */}
    </div>
  );
};

export default React.memo(History);
