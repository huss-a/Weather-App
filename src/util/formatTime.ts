const formatTime = (unixTimeSeconds: number, timezoneOffsetFromUtc: number) => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
        timeStyle: "short",
        timeZone: "UTC",
    });
    return formatter.format(
        new Date((unixTimeSeconds + timezoneOffsetFromUtc) * 1000)
    );
};

export default formatTime;
