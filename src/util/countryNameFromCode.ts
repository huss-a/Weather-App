const countryNameFromCode = (countryCode: string) => {
    if (!countryCode) return;
    return new Intl.DisplayNames(["en"], { type: "region" }).of(countryCode);
};

export default countryNameFromCode;