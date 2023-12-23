
import { useState } from "react"; // Selector.jsから移動
import countriesJson from "./countries.json"; // Selector.jsから移動
import TopPage from "./pages/TopPage";
import "./App.css";

function App() {
  // /////////////// Selector.js から移動 ///////////////
  const [country, setCountry] = useState("");
  // apiから受け取ったデータからページ上に表示したい内容に整形する
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  });
  console.log("countriesJson :>> ", countriesJson);

  const getCountryData = () => {
    fetch(
      `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData({
          date: data[data.length -1].Date,
          newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,
          totalConfirmed: data[data.length -1].Confirmed,
          newRecovered:  data[data.length -1].Recovered- data[data.length -2].Recovered,
          totalRecovered: data[data.length -1].Recovered,
        });
      });
  };
  // /////////////// Selector.js から移動 ///////////////

  return (
    <div>
      {console.log('countryData >> ', countryData)}
      {/*  props で TopPage.js にわたす */}
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} />
    </div>
  );
}

export default App;
