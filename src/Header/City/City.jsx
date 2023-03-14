import WeatherIcon from "../../WeatherIcon/WeatherIcon";

const City = ({ name, temp, index, weather }) => {
  return (
    <div className="city-weather" data-id={index}>
      <h5>{name}</h5>
      <div className="weather-container">
        <div>{temp} °C</div>
        <WeatherIcon weather={weather} />
      </div>
    </div>
  );
};

export default City;
