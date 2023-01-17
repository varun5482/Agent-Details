const getCurrentYears = (date: string): number | string => {
  if (!date) {
    return "";
  }
  const timeDiff = new Date(Date.now() - new Date(date).getTime());
  return Math.abs(timeDiff.getUTCFullYear() - 1970);
};

const getDateString = (date: string): string => {
  if (!date) {
    return "";
  }
  const dateVal = new Date(date);
  return `${dateVal.getDay()} - ${
    dateVal.getMonth() + 1
  } - ${dateVal.getFullYear()}`;
};

const sendWhatsappMessage = (phone: number) => {
  let message = `Many Happy Returns of the Day. Have a healthy and great year ahead. Regards Vasudev Mukherjee`;
  let whatsappUrl = `whatsapp://send?phone=91 ${phone}`;
  whatsappUrl += `&text=${encodeURI(message)}`;
  window.open(whatsappUrl);
};

export { getCurrentYears, getDateString, sendWhatsappMessage };
