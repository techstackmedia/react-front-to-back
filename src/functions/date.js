const formatDateAndTime = (dateString) => {
    const dateObj = new Date(dateString);
    const dayOfWeek = dateObj.toLocaleString('en-US', { weekday: 'short' });
    const month = dateObj.toLocaleString('en-US', { month: 'short' });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const time = dateObj.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    });
  
    return `${dayOfWeek} ${month} ${day} ${year} ${time}`;
  };

  export default formatDateAndTime
  