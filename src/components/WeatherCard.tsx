import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { WeatherProps } from "../App";
import formatTime from "../util/formatTime";
import countryNameFromCode from "../util/countryNameFromCode";
import formatWeather, { tempUnit } from "../util/formatWeather";

const WeatherCard = ({ weather }: { weather: WeatherProps }) => {
    const [sunriseTime, setSunriseTime] = useState("");
    const [sunsetTime, setSunsetTime] = useState("");
    const [countryName, setCountryName] = useState("");
    const [unit, setUnit] = useState<tempUnit>("C");

    const {
        location,
        cloudsPercent,
        description,
        sunrise,
        sunset,
        temp,
        timezoneOffsetFromUtc,
        wind,
    } = weather;

    useEffect(() => {
        setSunriseTime(formatTime(sunrise, timezoneOffsetFromUtc));
        setSunsetTime(formatTime(sunset, timezoneOffsetFromUtc));
        setCountryName(countryNameFromCode(location.country) || "");
    }, [weather]);

    return (
        <Card className="weather-card glass">
            <h1 className="p-3 fw-normal">
                🌡️ {formatWeather(temp.value, unit)}
                {unit !== "K" && "°"}
                <select
                    defaultValue="C"
                    onChange={e => setUnit(e.target.value as tempUnit)}
                    className="unit-select glass"
                >
                    <option value="C">C</option>
                    <option value="F">F</option>
                    <option value="K">K</option>
                </select>
            </h1>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="p-3 fw-bold">
                    📍{location.city}
                    {countryName && <>, {countryName}</>}
                </h3>
                <h3 className="p-3 fw-normal">{description}</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="p-3 fw-normal">
                    ☁️ <span className="fw-semibold">Cloudiness</span>{" "}
                    {cloudsPercent}%
                </h3>
                <h3 className="p-3 fw-normal">
                    💨 <span className="fw-semibold">Wind</span>{" "}
                    {Math.round(wind.speed * 10) / 10}m/s at {wind.heading}°
                </h3>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="p-3 fw-normal">
                    🌄 <span className="fw-semibold">Sunrise</span>{" "}
                    {sunriseTime}
                </h3>
                <h3 className="p-3 fw-normal">
                    🌅 <span className="fw-semibold">Sunset</span> {sunsetTime}
                </h3>
            </div>
        </Card>
    );
};
export default WeatherCard;
