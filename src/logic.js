const input = document.querySelector("#lokacija");
const adress = document.querySelector("form p");
const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
import "./style.css"; 

let globalData;
const cache = new Map();



async function getWeather(location) {
  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&lang=en&key=RBMWSMLNFZEZX6RXBZQXHGAWZ&contentType=json`,
      {
        method: "GET",
      }
    );

    const response = await data.json();

    let currentConditions = new CurrentConditions(
      response.currentConditions.conditions,
      response.currentConditions.datetimeEpoch,
      response.currentConditions.sunrise,
      response.currentConditions.sunset,
      response.currentConditions.temp
    );

    const days = response.days.map((el) => {
      const hours = el.hours.map(
        (elH) => new Hours(elH.datetime, elH.conditions, elH.temp, elH.icon)
      );
      return new Day(
        el.datetime,
        el.conditions,
        hours,
        el.sunrise,
        el.sunset,
        el.temp,
        el.tempmax,
        el.tempmin,
        el.icon
      );
    });

    const result = new Data(
      response.address,
      days,
      response.latitude,
      response.longitude,
      response.resolvedAddress,
      response.timezone,
      currentConditions
    );
    console.log(result);
    console.log(response);
    globalData = result;
    return result;
  } catch (err) {
    alert("Losa uneta vrednost!");
    console.error(err);
    adress.innerText = "";
    throw err;
  }
}


function convertTime(epoch) {
  const time = new Date(epoch * 1000);
  const options = {
    timeZone: "CET",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formatter = new Intl.DateTimeFormat("sr-RS", options);
  return formatter.format(time);
}

function createHeader() {
  tableBody.innerHTML = "";
  tableHead.innerHTML = "";
  const row = document.createElement("tr");
  let columns = Object.keys(globalData.Days[0]);
  columns = columns.filter((hour) => hour != "Hours");
  columns.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column;
    row.appendChild(th);
  });
  tableHead.appendChild(row);
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const submitData = async (e) => {
  let location = input.value.trim();
  const capitalizedLocation = location.split(" ").filter(word => word.trim() !== "").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  location = capitalizedLocation;
  if (location.length === 0) {
    alert("Potrebno je uneti lokaciju!");
    return;
  }
  showLoading();
  if (localStorage.getItem(location)) {
    globalData = JSON.parse(localStorage.getItem(location));
  } else {
    try {
      globalData = await getWeather(location);
      cache.set(location, globalData);
      localStorage.setItem(location, JSON.stringify(globalData));
    } catch (error) {
      hideLoading();
      console.error("Error fetching weather data:", error);
    }
  }
  adress.innerText = `${globalData.ResolvedAddress}\nLat: ${globalData.Latitude}, Lon: ${globalData.Longitude}\nTimezone: ${globalData.Timezone}\nCurrent Conditions: ${globalData.currentConditions.conditions}, Temp: ${globalData.currentConditions.temp}`;
  renderTable();
  hideLoading();
}

const debouncedSubmit = debounce(submitData, 500);

document.querySelector("form").addEventListener("submit", (e) => {e.preventDefault(); debouncedSubmit(e);});

function renderTable() {
  try {
    createHeader();
    let colspan = [1, 3, 3, 1];
    let brojac = 0;
    globalData.Days.forEach((day, index) => {
      const row = document.createElement("tr");
      row.id = index + 1;
      for (const [key, value] of Object.entries(day)) {
        const td = document.createElement("td");
        if (key == "icon") {
          const img = document.createElement("img");
          img.src = `./icons/${value}.png`;
          img.alt = value;
          img.classList.add("weatherIcon");
          td.appendChild(img);
          row.appendChild(td);
        } else if (key != "Hours") {
          td.textContent = value;
          row.appendChild(td);
        }
      }
      row.classList.add("dayRow");
      row.addEventListener("click", () => {
        const allRows = document.querySelectorAll(".hourRow");
        const hourRows = tableBody.querySelectorAll(
          `.hourRow[data-day="${index + 1}"]`
        );
        allRows.forEach((hr) => {
          if (Array.from(hourRows).includes(hr)) return;
          hr.classList.remove("expanded");
        });
        hourRows.forEach((hr) => {
          hr.classList.toggle("expanded");
        });
      });

      tableBody.appendChild(row);
      day.Hours.forEach((hour) => {
        const row = document.createElement("tr");
        row.setAttribute("data-day", index + 1);
        for (const [key, value] of Object.entries(hour)) {
          const td = document.createElement("td");
          if (key == "icon") {
            const img = document.createElement("img");
            img.src = `./icons/${value}.png`;
            img.alt = value;
            img.style.width = "32px";
            img.style.height = "32px";
            td.appendChild(img);
          } else {
            td.textContent = value;
          }
          td.colSpan = colspan[brojac];
          brojac++;
          row.classList.add("hourRow");
          row.appendChild(td);
        }
        brojac = 0;
        tableBody.appendChild(row);
      });
    });
  } catch (error) {
    alert("Greška: Unesite validnu lokaciju.");
  }
}

function showLoading() {
  document.querySelector("#loading").style.display = "block";
}

function hideLoading() {
  document.querySelector("#loading").style.display = "none";
}

class Data {
  constructor(
    adress,
    days,
    latitude,
    longitude,
    resolvedAddress,
    timezone,
    currentConditions
  ) {
    this.Adress = adress;
    this.Days = days;
    this.Latitude = latitude;
    this.Longitude = longitude;
    this.ResolvedAddress = resolvedAddress;
    this.Timezone = timezone;
    this.currentConditions = currentConditions;
  }
}

class Day {
  constructor(
    datetime,
    conditions,
    hours,
    sunrise,
    sunset,
    temp,
    tempMax,
    tempMin,
    icon
  ) {
    this.Datetime = datetime;
    this.Conditions = conditions;
    this.Hours = hours;
    this.Sunrise = sunrise + "h";
    this.Sunset = sunset + "h";
    this.Temp = temp + "°C";
    this.TempMax = tempMax + "°C";
    this.TempMin = tempMin + "°C";
    this.icon = icon;
  }
}

class Hours {
  constructor(datetime, conditions, temp, icon) {
    this.datetime = `- ${datetime}h `;
    this.Conditions = conditions;
    this.Temp = temp + "°C";
    this.icon = icon;
  }
}

class CurrentConditions {
  constructor(conditions, dateTimeEpoch, sunrise, sunset, temp) {
    this.conditions = conditions;
    this.datetime = convertTime(dateTimeEpoch) + "h";
    this.sunrise = sunrise + "h";
    this.sunset = sunset + "h";
    this.temp = temp + "°C";
  }
}
