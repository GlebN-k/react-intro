import './App.css';
import WeatherContainer from './Header/WeatherContainer/WeatherContainer';
import Title from './Title/Title';

function App() {
  return (
    <>
      <Title />
      <WeatherContainer />
      <div className="App__end">Have a nice day and don't forget umbrella if you are in New Delhi now!</div>
    </>
  );
}

export default App; 