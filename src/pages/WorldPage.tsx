import Header from "../components/Header";
import Title from "../components/Title"
import Card from "../components/Card";

// tsxに変換
interface SingleCountriesDataType {
  Country: string,
  NewConfirmed: number,
  TotalConfirmed: number,
}

// tsxに変換 上のデータが配列で有ることを明示する
// extendsを使わない書き方
interface WorldPageType {
  allCountriesData: Array<SingleCountriesDataType>
}

// const WorldPage = (props) => {
// 分割代入
const WorldPage = ({allCountriesData}: WorldPageType) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  )
}

export default WorldPage;