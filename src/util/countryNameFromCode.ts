// Api returns country code, this function figures out the name from that code.
const countryNameFromCode = (countryCode: string) => {
    if (!countryCode) return;
    return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode);
};

export default countryNameFromCode;