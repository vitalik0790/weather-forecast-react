import React from 'react';
import Form from './components/form';
import Info from './components/info'
import Weather from './components/weather';

const API_KEY = "11b2f03e9b4faa608ea1f7ec670542e6";

export default class App extends React.Component {

    state = {
        tempMorning: undefined,
        tempEvening: undefined,
        tempNight: undefined,
        feels_like: undefined,
        city: undefined,
        country: undefined,
        cloudiness: undefined,
        humidity: undefined,
        windSpeed: undefined,
        error: undefined,
    };

    getWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await url.json();
        console.log(data);

        this.setState({
            tempMorning: data.main.temp,
            tempEvening: data.main.temp_max,
            tempNight: data.main.temp_min,
            feels_like: data.main.feels_like,
            city: data.name,
            country: data.sys.country,
            cloudiness: data.clouds.all,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            error: "",
        });
    };

    render() {
        return (
            <div>
                <Info />
                <Form weather={this.getWeather} />
                <Weather
                    tempMorning={this.state.tempMorning}
                    tempEvening={this.state.tempEvening}
                    tempNight={this.state.tempNight}
                    feels_like={this.state.feels_like}
                    city={this.state.city}
                    country={this.state.country}
                    cloudiness={this.state.cloudiness}
                    humidity={this.state.humidity}
                    windSpeed={this.state.humidity}
                />
            </div>
        )
    }
}