import axios from "axios";
import { geoApiUrl, weatherApiUrl } from "./apiUrl";

export const fetchWeather = async (lat: string, lon: string) => {
    const data: any = (await axios.get(weatherApiUrl(lat, lon))).data;
    return data;
};

export const fetchCoords = async (place: string) => {
    const data: any = (await axios.get(geoApiUrl(place))).data[0];
    return data;
};
