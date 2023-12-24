import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
import Header from "../components/Header";

{/*  App.js から props を受け取り Selector.js にわたす */ }
// 分割代入
// const TopPage = (props) => {
const TopPage = ({countriesJson, setCountry, countryData, loading}) => {
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
