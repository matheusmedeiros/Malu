export const formatData = (date) => {
  const dateElements = date.split('-').reverse();

  return `${dateElements[1]}/${dateElements[0]}`
}

export const convertTempScale = (isFahrenheit, temp) => {
  if (isFahrenheit) {
    return Math.trunc((temp - 32) * 5 / 9);
  } else {
    return temp * 9 / 5 + 32;
  }
}

