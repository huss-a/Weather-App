import axios from "axios";
import { geoApiUrl, weatherApiUrl } from "./apiUrl";
import { toast } from "react-toastify";

// make request to weather api
export const fetchWeather = async (lat: string, lon: string) => {
    const res = await axios.get(weatherApiUrl(lat, lon)).catch(err => {
        toast.error(err.message);
    });
    return res?.data;
};

// make request to geo api
export const fetchCoords = async (place: string) => {
    const res = await axios.get(geoApiUrl(place)).catch(err => {
        toast.error(err.message);
    });
    return res?.data[0];
};
