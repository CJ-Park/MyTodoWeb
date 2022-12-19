import env from "ts-react-dotenv";
import { useEffect, useState } from "react";
import styled from "styled-components";

const API_KEY = env.REACT_APP_API_KEY;

const Weather = () => {
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);
    const [temp, setTemp] = useState(0);

    const getWeatherByLocation = async (lat: number, lon: number) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        setCity(data.name)
        setWeather(data.weather[0].main);
        setTemp(data.main.temp);
        setLoading(false);
    }

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            getWeatherByLocation(latitude, longitude);
        })
    }

    const getWeatherByCity = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        setWeather(data.weather[0].main);
        setTemp(data.main.temp);
        setLoading(false);
    }

    useEffect(() => {
        if(city === null) {
            setLoading(true);
            getCurrentLocation();
        } else {
            setLoading(true);
            getWeatherByCity();
        }
    }, [city]);
    return (
        <Container>
            {loading ? (
                <WeatherText></WeatherText>
            ) : (
                <WeatherText>{weather} / {temp}&deg;C / {city}</WeatherText>
            )}
        </Container>
    );
};

const Container = styled.div`
  margin-top: 40px;
`;
const WeatherText = styled.div`
  display: flex;
  font-size: 15px;
  color: white;
  justify-content: center;
`;

export default Weather;