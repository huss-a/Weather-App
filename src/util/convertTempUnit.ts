// The 3 temperature units supported by this app
export type tempUnit = "C" | "F" | "K";

// Converts kelvin to either celcius or fahrenheit
// kelvin is the default unit used by api
const convertTemp = (tempInKelvin: number, unit: tempUnit) => {
    if (unit === "K") return tempInKelvin;
    else if (unit === "C") return tempInKelvin - 273;
    else return (tempInKelvin - 273) * (9 / 5) + 32;
};

export default convertTemp;
