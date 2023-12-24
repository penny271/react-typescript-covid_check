///////////////////// type /////////////////////
// tsxに変換
export type CountryDataType = {
  date: string,
  newConfirmed: number,
  totalConfirmed: number,
  newRecovered:  number,
  totalRecovered: number,
}

// ¥ 共通部分の切り出し、他の型定義と共有できるようにする
type CountriesJsonType = {
  Country: string,
  Slug: string,
}[]

// - 各コンポーネントに入ってくるデータには、それぞれ個別の型定義が必要。これによって、もしそこで何らかの齟齬があるとエラーが表示され、潜在的なバグや不具合を早い段階で発見できるようになる。
// tsxに変換
export type TopPageType = {
  countriesJson: CountriesJsonType,
  // countriesJson: {
  //   // jsonファイルの中身も個別に型を記述する
  //   Country: string,
  //   Slug: string,
  // }[], // ! 配列構造であることを明示する
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countryData: CountryDataType, // すでに型定義されているためそれを利用する
  // countryData: {
  //   date: string,
  //   newConfirmed: number,
  //   totalConfirmed: number,
  //   newRecovered: number,
  //   totalRecovered: number,
  // },
  loading: boolean,
}

// tsxに変換
export type SelectorType = {
  setCountry: React.Dispatch<React.SetStateAction<string>>,
  countriesJson: CountriesJsonType,
}

// tsxに変換
export type ResultsType = {
  countryData: CountryDataType,
  loading: boolean,
}

///////////////////// interface /////////////////////
// tsxに変換
interface SingleCountriesDataType {
  Country: string,
  NewConfirmed: number,
  TotalConfirmed: number,
}

// tsxに変換 上のデータが配列で有ることを明示する
export interface AllCountriesDataType extends Array<SingleCountriesDataType> { }

// tsxに変換 上のデータが配列で有ることを明示する
// extendsを使わない書き方
export interface WorldPageType {
  allCountriesData: Array<SingleCountriesDataType>
}

// tsxに変換 上のデータが配列で有ることを明示する
// extendsを使わない書き方
export interface CardType {
  allCountriesData: Array<SingleCountriesDataType>
}