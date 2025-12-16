interface IProps {
  seconds: number;
}

const TimerDisplay = ({ seconds }: IProps) => {
  console.log('⏱️ TimerDisplay render');

  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
      { Math.floor(seconds / 60) }:{ (seconds % 60).toString().padStart(2, '0') }
    </div>
  );
};

export default TimerDisplay;
