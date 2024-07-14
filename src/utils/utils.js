export const getRandomMinutes = () => {
  return Math.floor(Math.random() * (6 - 3) + 3);
};

export const getRandomSeconds = () => {
  const seconds = Math.floor(Math.random() * 60);
  return seconds < 10 ? `0${seconds}` : seconds;
};
