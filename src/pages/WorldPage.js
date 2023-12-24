import Header from "../components/Header";
import Title from "../components/Title"
import Card from "../components/Card";

// const WorldPage = (props) => {
// 分割代入
const WorldPage = ({allCountriesData}) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  )
}

export default WorldPage;