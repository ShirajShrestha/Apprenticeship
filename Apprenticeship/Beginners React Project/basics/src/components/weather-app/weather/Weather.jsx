import { useEffect, useState } from "react";
import Search from "../search/Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (params) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=d729395d12b71b06390cb46ef9b2747e`
      );
      const responseData = await response.json();
      console.log(responseData);
      setWeatherData(responseData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  const handleSearch = async () => {
    getWeatherData(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    getWeatherData("kathmandu");
  }, []);

  return (
    <div className="weather-container">
      <h1> Check Weather</h1>
      <div className="weather-wrapper">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <div className="city">
              <h2>
                {weatherData?.name}, <span>{weatherData?.sys?.country} </span>
              </h2>
            </div>
            <div className="date">
              <span>{getCurrentDate()}</span>
            </div>
            <div className="temperature">{weatherData?.main?.temp}</div>
            <p className="description">
              {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>
            <div className="extra-description">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
              <div>
                <p className="humidity">{weatherData?.main?.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
