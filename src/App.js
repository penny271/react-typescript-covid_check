// ^ useEffect を使うことで、コンポーネントが表示されたり、もしくは消えた場合、またはstateが変更されたりした時の操作を指定できます。ここでは、「WorldPageコンポーネントが表示された時、自動で全世界の感染データを取得する」という操作を指定していきます。

import { useState, useEffect } from "react"; // Selector.jsから移動
import { Route, Routes, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json"; // Selector.jsから移動
import TopPage from "./pages/TopPage";
import WorldPage from "./pages/WorldPage";
import "./App.css";

function App() {
  // - 国個別
  // /////////////// Selector.js から移動 ///////////////
  const [country, setCountry] = useState("japan");
  // apiから受け取ったデータからページ上に表示したい内容に整形する
  const [countryData, setCountryData] = useState({
    date: '',
    newConfirmed: '',
    totalConfirmed: '',
    newRecovered: '',
    totalRecovered: '',
  });

  // /////////////// Card.js から移動 ///////////////
  const [allCountriesData, setAllCountriesData] = useState([]);
  /////////////////////////////////////////////////

  // ////////// Results.js に ローディングを表示させる華道家の判定に使用 //////////
  const [loading, setLoading] = useState(false);
  /////////////////////////////////////////////////

  // console.log("countriesJson :>> ", countriesJson);
  // /////////////// Selector.js から移動 ///////////////


  // - 国一覧
  // /////////////// Card.js から移動 ///////////////
  // const getAllCountriesData = () => {
  //   fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
  //     .then(res => res.json())
  //     .then(data => setAllCountriesData(data.Countries))
  //     // .then(data => console.log('world data.countries :>> ', data.Countries))
  //     .catch(err => {
  //       console.log('err :>> ', err);
  //     })
  // }

  // 国名を選択した段階でfetchする //
  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
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
          setLoading(false);
        })
        .catch(err => alert('エラーが発生しました。ページをリロードして、もう一度トライしてください。'))
    };
    getCountryData();
  }, [country]); // ! selectの国名(country)が変更されるたびに発火する

  // ¥ useEffectを使うと、useEffectに渡された関数はレンダーの結果が画面に反映された後に動作します。
  // ¥ つまりuseEffectとは、「関数の実行タイミングをReactのレンダリング後まで遅らせるhook」です。
  useEffect(() => {
    console.log('test :>>');
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
      .catch(err => alert(`${err.message}: エラーが発生しました。ページをリロードして、もう一度トライしてください。`))
  },[]); //! []を第二引数にいれることで 1回限りのrender時のみ useEffect()が働く
  // /////////////// Card.js から移動 ///////////////


  return (
    // BrowserRouter と Routes で、ページ背性に使いたいコンポーネントを挟む
    <BrowserRouter>
      <Routes>
        {/* {console.log('countryData >> ', countryData)} */}
        <Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading} />} />
        {/* <Route path="/world" element={ <p>ワールド</p> } /> */}
        <Route path="/world" element={<WorldPage allCountriesData={allCountriesData} /> } />
        {/*  props で TopPage.js にわたす */}
        {/* <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
