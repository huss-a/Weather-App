import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import { fetchCoords, fetchWeather } from "./util/makeRequests";
import { Button, Form } from "react-bootstrap";
import Loader from "./components/Loader";
import { toast } from "react-toastify";

export interface WeatherProps {
    location: { city: string; country: string };
    temp: { value: number; unit: "C" | "F" | "K" };
    description: string;
    cloudsPercent: number;
    wind: {
        speed: number;
        heading: number;
    };
    sunrise: number;
    sunset: number;
    timezoneOffsetFromUtc: any;
}

function App() {
    const [coords, setCoords] = useState(["51.509865", "-0.118092"]);
    const [weather, setWeather] = useState<WeatherProps>();
    const [inputPlace, setInputPlace] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [lat, lon] = coords;

    const handleSubmit = async () => {
        setIsLoading(true);
        const data = await fetchCoords(inputPlace).catch(console.error);
        if (data) setCoords([`${data.lat}`, `${data.lon}`]);
        else {
            setIsLoading(false);
            toast.error("Invalid location", { autoClose: 2000 });
            return;
        }
    };

    useEffect(() => {
        const getWeather = async () => {
            const data = await fetchWeather(lat, lon).catch(console.error);

            const {
                name: cityName,
                sys,
                main,
                wind,
                clouds,
                weather,
                timezone,
            } = data;

            setWeather({
                location: { city: cityName, country: sys.country },
                temp: { value: Math.round(Number(main.temp)), unit: "K" },
                wind: {
                    speed: wind.speed,
                    heading: wind.deg,
                },
                cloudsPercent: clouds.all,
                description: weather[0].description,
                timezoneOffsetFromUtc: timezone,
                sunrise: sys.sunrise,
                sunset: sys.sunset,
            });
        };

        getWeather().catch(console.error);
        setIsLoading(false);
    }, [coords]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center wrapper">
            <div className="form-wrapper mb-4 d-flex justify-content-between align-items-center">
                <Form.Control
                    value={inputPlace}
                    type="text"
                    placeholder="Enter Place"
                    onChange={e => setInputPlace(e.target.value)}
                />
                <Button
                    className="submit-btn py-1"
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!inputPlace}
                >
                    {isLoading ? <Loader size="sm" /> : <>Get Weather</>}
                </Button>
            </div>
            {weather ? <WeatherCard weather={weather} /> : <Loader size="lg" />}
        </div>
    );
}

export default App;
