function getYear() {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
}

getYear();
