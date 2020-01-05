import React, { useState, useEffect } from "react";
import axios from "axios";

const Language = ({ language }) => {
  return <li>{language.name}</li>;
};

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    let apiKey = process.env.apiKey
    axios
    .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`)
    .then(response => {
      setWeather(response.data);
    });
  }, []);

  const languages = country.languages.map(language => (
    <Language key={language.name} language={language} />
  ));

  if (weather) {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>{languages}</ul>
        <img src={country.flag} style={{ height: 100 }} />
        <Weather key={country.name} weather={weather} />
      </div>
    );
  }
  return null

};

const Weather = ({ weather }) => {
  return (
    <div>
      <h2>Weather in {weather.location.name}</h2>
      <strong>temperature:</strong> {weather.current.temperature} Celsius
      <br></br>
      <img src={weather.current.weather_icons[0]}/>
      <br></br>
      <strong>wind: </strong> {weather.current.wind_speed} kph direction{" "} {weather.current.wind_dir}
    </div>
  );
};

export default Country;
