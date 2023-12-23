
{/*  Top.js => TopPage.js から props を受け取る */}

const Selector = (props) => {

  return (
    <div>
      <select onChange={(e) => props.setCountry(e.target.value)}>
        <option>Select A Country</option>
        {props.countriesJson.map((country, index) => (
          // console.log("country :>> ", country.Country)
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={props.getCountryData}>Get Data</button>
    </div>
  );
};

export default Selector;
