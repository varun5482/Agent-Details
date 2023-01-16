const getCurrentYears = (date: string): number | string => {
  if (!date) {
    return '';
  }
  const timeDiff = new Date(Date.now() - new Date(date).getTime());
  return Math.abs(timeDiff.getUTCFullYear() - 1970);
};

const getDateString = (date: string): string => {
  if (!date) {
    return '';
  }
  const dateVal= new Date(date);
  return `${dateVal.getDay()} - ${dateVal.getMonth()} - ${dateVal.getFullYear()}`;
};

export { getCurrentYears, getDateString };
