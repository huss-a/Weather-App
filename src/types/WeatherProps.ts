export default interface WeatherProps {
    location: { city: string; country: string };
    temp: { value: number };
    description: string;
    cloudsPercent: number;
    wind: {
        speed: number;
        heading: number;
    };
    sunrise: number;
    sunset: number;
    timezoneOffsetFromUtc: number;
}