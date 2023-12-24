
{/*  Top.js => TopPage.js から props を受け取る */}

// const Selector = (props) => {
// 分割代入
const Selector = ({setCountry, countriesJson, getCountryData}) => {

  return (
    <div className="selector-container">
      <select onChange={(e) => setCountry(e.target.value)}>
        {/* <option>Select A Country</option> */}
        {countriesJson.map((country, index) => (
          // console.log("country :>> ", country.Country)
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      {/* <button onClick={getCountryData}>Get Data</button> */}
    </div>
  );
};

export default Selector;
