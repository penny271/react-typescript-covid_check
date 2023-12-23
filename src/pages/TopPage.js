import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

{/*  App.js から props を受け取り Selector.js にわたす */}
const TopPage = (props) => {
  return (
    <div>
      <Title />
      <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
      <Results />
    </div>
  );
};

export default TopPage;
