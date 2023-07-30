export const weatherApiUrl = (lat: string, lon: string) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_OW_API_KEY
    }`;

export const geoApiUrl = (place: string) =>
    `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${
        import.meta.env.VITE_OW_API_KEY
    }`;
