// import { useState } from "react";
// 型定義をimportする
import { CardType } from "../types";

// props
const Card = ({allCountriesData}:CardType) => {
  // const [allCountriesData, setAllCountriesData] = useState([]);

  // const getAllCountriesData = () => {
  //   fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
  //     .then(res => res.json())
  //     .then(data => setAllCountriesData(data.Countries))
  //     // .then(data => console.log('world data.countries :>> ', data.Countries))
  //     .catch(err => {
  //       console.log('err :>> ', err);
  //     })
  // }

  return (
    <div className="card-container">
      {/* {} ではなく、 そのままhtmlを書くか、 () で囲む必要がある! 要素を返すため */}
      {allCountriesData.map((singleData, index) => (
        <div key={index} className="card">
          <div>
            <h2>{singleData.Country}</h2>
            <p>新規感染者: <span>{singleData.NewConfirmed.toLocaleString()}</span></p>
            <p>感染者総数: <span>{singleData.TotalConfirmed.toLocaleString()}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card