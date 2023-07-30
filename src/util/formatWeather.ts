export type tempUnit = "C" | "F" | "K";

const formatWeather = (tempInKelvin: number, unit: tempUnit) => {
    if (unit === "K") return tempInKelvin;
    if (unit === "C") return tempInKelvin - 273;
    else return (tempInKelvin - 273) * (9 / 5) + 32;
};

export default formatWeather;
