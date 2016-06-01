// (int) -> (int)
const positive = number => {
    if (number < 0)
        throw new Error('The argument need be positive.');
    return number;
};

// (int) -> (int)
export const minutesToSeconds = minutes => positive(minutes) * 60;

// (int) -> (int)
export const secondsToMilliseconds = seconds => positive(seconds) * 1000;

// Seconds to format mm:ss
// (int) -> (string)
export const formatToMinutesAndSeconds = seconds => {
    const formatDigit = digit => digit < 10? ('0' + digit): digit

    const min = Math.floor(positive(seconds) / 60);
    const sec = seconds % 60;
    const formatedMinutes = formatDigit(min);
    const formatedSeconds = formatDigit(sec);

    return `${formatedMinutes}:${formatedSeconds}`;
}
