import items from "../../mockData";
import City from "../City/City";

const WeatherContainer = () => {
  return (
    <div className="cities__container">
      {items.map((item, index) => (
        <City name={item.city} temp={item.temp} index={index} weather={item.weather} key={index}/>
      ))}
    </div>
  );
};

export default WeatherContainer;
