import Loading from "./Loading"

// tsxに変換
type ResultsType = {
  countryData: {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number,
  },
  loading: boolean,
}

// const Results = (props) => {
// 分割代入
// tsxに変換
const Results = ({countryData, loading}:ResultsType) => {
  // console.log('Resultsのprops :>> ', props);
  // 分割代入
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
  return (
    <div className="results-container">
      {loading ? <Loading /> :
            <div>
            <p>日付: <span>{date.slice(0, 10)}</span></p>
            <p>新規感染者: <span>{newConfirmed.toLocaleString()}</span></p>
            <p>感染者総数: <span>{totalConfirmed.toLocaleString()}</span></p>
            <p>新規回復者: <span>{newRecovered.toLocaleString()}</span></p>
            <p>回復者総数: <span>{totalRecovered.toLocaleString()}</span></p>
          </div>
      }
    </div>
  );
};

export default Results;