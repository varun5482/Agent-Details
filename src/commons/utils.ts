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
  let message = `Many Happy Returns of the Day.<br/> Have a healthy and great year ahead. <br/>Regards Vasudev Mukherjee`;
  let whatsappUrl = `https://web.whatsapp.com/send?phone=${phone}`;
  whatsappUrl += `&text=${encodeURI(message)}&app_absent=0`;
  window.open(whatsappUrl);
};

export { getCurrentYears, getDateString, sendWhatsappMessage };
