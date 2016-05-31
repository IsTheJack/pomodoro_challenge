export const minutesToSeconds = minutes => minutes * 60;

export const secondsToMilliseconds = seconds => seconds * 1000;

// Seconds to format mm:ss
export const formatToMinutesAndSeconds = seconds => {
    const formatDigit = digit => digit < 10? ('0' + digit): digit

    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const formatedMinutes = formatDigit(min);
    const formatedSeconds = formatDigit(sec);

    return `${formatedMinutes}:${formatedSeconds}`;
}
