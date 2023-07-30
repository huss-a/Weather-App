import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { WeatherProps } from "../App";
import formatTime from "../util/formatTime";
import countryNameFromCode from "../util/countryNameFromCode";

const WeatherCard = ({ weather }: { weather: WeatherProps }) => {
    const [sunriseTime, setSunriseTime] = useState("");
    const [sunsetTime, setSunsetTime] = useState("");
    const [countryName, setCountryName] = useState("");
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
        <Card className="weather-card">
            <h1 className="p-3 fw-normal">
                🌡️ {temp.value}
                {temp.unit !== "K" && "°"}
                {temp.unit}
            </h1>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="p-3 fw-bold">
                    📍{location.city}
                    {countryName && <>, {countryName}</>}
                </h2>
                <h3 className="p-3 fw-normal">{description}</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="p-3 fw-normal">
                    ☁️ <span className="fw-semibold">Cloudiness</span>{" "}
                    {cloudsPercent}%
                </h3>
                <h3 className="p-3 fw-normal">
                    💨 <span className="fw-semibold">Wind</span> {wind.speed}m/s
                    at {wind.heading}°
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
