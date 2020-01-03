import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <p>{country.name}</p>
    </div>
  );
};


const CountryDetails = ({country}) => {

    const languages = country.languages.map(language => <li>{language.name}</li>)
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>

            <h2>languages</h2>
            <ul>
                {languages}
            </ul>

            <img src={country.flag} align='left' width='150' height='150'/>


        </div>
    )
}

const Countrys = ({ countrys, filter }) => {
  const filteredCountrys = countrys.filter(country =>
    country.name.toUpperCase().includes(filter.toUpperCase())
  )

  if (filteredCountrys.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
  
  if (filteredCountrys.length < 10 && filteredCountrys.length != 1) {
    const rows = () =>
      filteredCountrys.map(country => (
        <Country key={country.name} country={country} />
      ));
    return <div>{rows()}</div>;
  }

  if (filteredCountrys.length === 1) {
    const rows = () =>
    filteredCountrys.map(country => (
        <CountryDetails key={country.name} country={country} />
    ));
    return <div>{rows()}</div>
  }
};

export default Countrys;
