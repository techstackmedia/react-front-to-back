const formatDateTime = (dateObj, zeroPad, formatHours, getAMPM) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNames[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const hour = zeroPad(formatHours(dateObj.getHours()));
  const minute = zeroPad(dateObj.getMinutes());
  const seconds = zeroPad(dateObj.getSeconds());
  const AMPM = getAMPM(dateObj.getHours());

  return `📅 ${month} ${day}, ${year} ⏲️ ${hour}:${minute}:${seconds} ${AMPM}`;
};

export default formatDateTime;
