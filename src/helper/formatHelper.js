const formatNumber = (number) => {
  return number.toLocaleString("id-ID")
};


const formatDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false 
  }).replace(",", "")
}

export {
  formatNumber,
  formatDate,
}
