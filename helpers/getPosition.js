
const getPosition = (place) => {
    if (place.toString().endsWith(1) && !place.toString().endsWith(11))  return `${place}st`;
    if (place.toString().endsWith(2) && !place.toString().endsWith(12))  return `${place}nd`;
    if (place.toString().endsWith(3) && !place.toString().endsWith(13))  return `${place}rd`;
    
    return `${place}th`;
  };

module.exports = getPosition;