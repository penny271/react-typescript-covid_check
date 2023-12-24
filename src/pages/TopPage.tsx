import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
import Header from "../components/Header";

// - 各コンポーネントに入ってくるデータには、それぞれ個別の型定義が必要。これによって、もしそこで何らかの齟齬があるとエラーが表示され、潜在的なバグや不具合を早い段階で発見できるようになる。
// tsxに変換
type TopPageType = {
  countriesJson: {
    // jsonファイルの中身も個別に型を記述する
    Country: string,
    Slug: string,
  }[], // ! 配列構造であることを明示する
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countryData: {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number,
  },
  loading: boolean,
}


{/*  App.js から props を受け取り Selector.js にわたす */ }
// 分割代入
// const TopPage = (props) => {
// tsxに変換
const TopPage = ({countriesJson, setCountry, countryData, loading}: TopPageType) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector countriesJson={countriesJson} setCountry={setCountry} />
        {/* App.js => TopPage.js => Results */}
        <Results countryData={countryData} loading={ loading } />
      </div>
    </div>
  );
};

export default TopPage;
