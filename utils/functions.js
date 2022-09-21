export const generateRandomNumberBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}