interface IProps {
  records: string[];
}

const Statistics = ({ records }: IProps) => {
  console.log('📊 Statistics render');

  const totalTime = 0;
  const avgTime = 0;

  return (
    <div>
      <p>Total: { totalTime } s</p>
      <p>Avg: { avgTime } s</p>
    </div>
  );
};

export default Statistics;
