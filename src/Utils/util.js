export const utcToString = (utcCreated) => {
  const utcCurrent = Date.now() / 1000;
  const secondsSince = utcCurrent - utcCreated;

  const secondsMin = 60;
  const secondsHr = secondsMin * 60;
  const secondsDay = secondsHr * 24;
  const secondsMonth = secondsDay * 30.437;
  const secondsYear = secondsDay * 365;

  if (secondsSince < secondsMin) {
    return "less than minute.";
  } else if (secondsSince < secondsHr) {
    return "less than hour";
  } else if (secondsSince < secondsDay) {
    const hours = Math.floor(secondsSince / secondsHr);
    if (hours < 2) {
      return `${hours} hour`;
    }
    return `${hours} hours`;
  } else if (secondsSince < secondsMonth) {
    const days = Math.floor(secondsSince / secondsDay);
    if (days === 1) return "1 day";
    return `${days} days`;
  } else if (secondsSince < secondsYear) {
    const months = Math.floor(secondsSince / secondsMonth);
    return `${months} month`;
  }
  const years = Math.floor(secondsSince / secondsYear);
  return `${years} yr.`;
};
