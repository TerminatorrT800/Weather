const input = document.querySelector('#lokacija');
const adress = document.querySelector('form p');
const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

let globalData;

document.querySelector('form button').addEventListener('click', submitData);
document.querySelector('.danBTN').addEventListener('click', poDanuPrikaz)
document.querySelector('.satBTN').addEventListener('click', poSatuPrikaz)
document.querySelector('.trenutnoBTN').addEventListener('click', trenutnoPrikaz)


async function getWeather(location) {
    try {
        const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=RBMWSMLNFZEZX6RXBZQXHGAWZ&contentType=json`, {
            "method": "GET",
        })

        const response = await data.json();

        let hours = [];
        let days = [];

        let currentConditions = new CurrentConditions(response.currentConditions.conditions, response.currentConditions.datetimeEpoch, response.currentConditions.sunrise, response.currentConditions.sunset, response.currentConditions.temp);

        response.days.forEach(el => {
            el.hours.forEach(elH => {
                let hour = new Hours(elH.datetime, elH.conditions, elH.temp);
                hours.push(hour);
            })
            let day = new Day(el.datetime, el.conditions, hours, el.sunrise, el.sunset, el.temp, el.tempmax, el.tempmin);
            days.push(day);
            hours = [];
        });

        const result = new Data(response.address, days, response.latitude, response.longitude, response.resolvedAddress, response.timezone, currentConditions);
        console.log(result);
        console.log(response);
        console.log(Object.keys(result));
        globalData = result;
        return result;
    }
    catch (err) {
        alert("Losa uneta vrednost!");
        console.error(err);
        adress.innerText = '';
        throw err;
    };
}


function tempConvertToC(farenheit) {
    let string = (farenheit - 32) / 1.8;
    string = string.toString();
    return string.substring(0, 3);
}

function convertTime(epoch) {
    const time = new Date(epoch * 1000)
    const options = {
        timeZone: 'CET',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formatter = new Intl.DateTimeFormat('sr-RS', options);
    return formatter.format(time);
}

function createHeader() {
    tableBody.innerHTML = '';
    tableHead.innerHTML = '';
    const row = document.createElement('tr');
    let columns = Object.keys(globalData.Days[0]);
    columns = columns.filter(hour => hour != "Hours");
    columns.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column;
        row.appendChild(th);
    })
    tableHead.appendChild(row);
}

async function submitData(e) {
    e.preventDefault();
    if (input.value.length > 0) {
        let data = await getWeather(input.value);
        console.log(data);
        adress.innerText = data.ResolvedAddress;
    } else {
        alert("Potrebno je uneti lokaciju!")
    }
}

function poDanuPrikaz() {
    try {
        createHeader();
        let lastRow = 15;
        let brojac = 1;
        globalData.Days.forEach(day => {
            const row = document.createElement('tr');
            for (const [key, value] of Object.entries(day)) {
                const td = document.createElement('td');
                if (key != "Hours") {
                    td.textContent = value;
                    row.appendChild(td);
                }
            }
            row.classList.add('dayRow');
            if (brojac != lastRow) {
                row.style.borderBottom = "3px solid #dddddd";
            }
            tableBody.appendChild(row);
            brojac++;
        })
        removeButtons()
    }
    catch (error) {
        alert('Unesi lokaciju some!')
        console.log(error);
    }
}


function poSatuPrikaz() {
    let index = 1;
    try {
        createHeader();
        let colspan = [1, 3, 3];
        let brojac = 0;
        
        globalData.Days.forEach(day => {
            const row = document.createElement('tr');
            row.id = index;

            for (const [key, value] of Object.entries(day)) {
                const td = document.createElement('td');
                if (key != "Hours") {
                    td.textContent = value;
                    row.classList.add('dayRow');
                    row.appendChild(td);
                }
            }
            tableBody.appendChild(row);
            day.Hours.forEach(hour => {
                const row = document.createElement('tr');
                row.id = index;
                for (const [key, value] of Object.entries(hour)) {
                    const td = document.createElement('td');
                    td.textContent = value;
                    td.colSpan = colspan[brojac];
                    brojac++;
                    td.classList.add('hourRow');
                    row.appendChild(td);
                }
                brojac = 0;
                tableBody.appendChild(row);
            })
            index++;
        })
        addButtons(index)
        clickPage()
        loadFirstPage();

    }
    catch (error) {
        alert('Unesi lokaciju some!')
        console.log(error);
    }
}


function trenutnoPrikaz() {

    try {
        tableBody.innerHTML = '';
        tableHead.innerHTML = '';
        const row = document.createElement('tr');
        const bodyRow = document.createElement('tr');

        let brojac = 0;

        let columns = Object.keys(globalData);
        columns.pop();
        columns = columns.concat(Object.keys(globalData.currentConditions));
        columns = columns.filter(days => days != 'Days');

        columns.forEach(column => {
            const th = document.createElement('th');
            const td = document.createElement('td');
            th.textContent = column;
            if (brojac < 5) {
                td.textContent = globalData[column];
            } else {
                td.textContent = globalData.currentConditions[column];
            }
            row.appendChild(th);
            bodyRow.appendChild(td);
            brojac++;
        })
        tableHead.appendChild(row);
        tableBody.appendChild(bodyRow);  
        removeButtons()      
    }
    catch (error) {
        alert("Unesi lokaciju some");
        console.log(error);
    }

}


function clickPage() {
    const buttons = document.querySelectorAll('.stranice button');
    const rows = document.querySelectorAll('tbody tr')
    console.log(buttons);
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('clicked')
            })
            btn.classList.add('clicked');
            rows.forEach(row => {
                row.style.display = 'table-row';
                if (row.id != btn.id) {
                    row.style.display = 'none';
                }
            })
        })

    })
}


function loadFirstPage(){
    const buttons = document.querySelectorAll('.stranice button');
    buttons[0].click();
}

function addButtons(counter) {
    const straniceDIV = document.querySelector('.stranice');
    for (let i = 1; i < counter; i++) {
        const BTN = document.createElement('button');
        BTN.innerText = i;
        BTN.id = i;
        straniceDIV.appendChild(BTN)
    }
}

function removeButtons(){
    document.querySelector('.stranice').innerHTML ='';
}

class Data {
    constructor(adress, days, latitude, longitude, resolvedAddress, timezone, currentConditions) {
        this.Adress = adress;
        this.Days = days
        this.Latitude = latitude
        this.Longitude = longitude
        this.ResolvedAddress = resolvedAddress
        this.Timezone = timezone
        this.currentConditions = currentConditions
    }
}


class Day {
    constructor(datetime, conditions, hours, sunrise, sunset, temp, tempMax, tempMin) {
        this.Datetime = datetime;
        this.Conditions = conditions;
        this.Hours = hours;
        this.Sunrise = sunrise + "h";
        this.Sunset = sunset + "h";
        this.Temp = tempConvertToC(temp) + "°C";
        this.TempMax = tempConvertToC(tempMax) + "°C";
        this.TempMin = tempConvertToC(tempMin) + "°C";
    }
}


class Hours {
    constructor(datetime, conditions, temp) {
        this.Datetime = `- ${datetime}h `;
        this.Conditions = conditions;
        this.Temp = tempConvertToC(temp) + "°C";
    }
}


class CurrentConditions {
    constructor(conditions, datetimeEpoch, sunrise, sunset, temp) {
        this.conditions = conditions
        this.datetime = convertTime(datetimeEpoch) + "h"
        this.sunrise = sunrise + "h"
        this.sunset = sunset + "h"
        this.temp = tempConvertToC(temp) + "°C"
    }
}





/*
Ubacis 15 dugmeta, renderujes celu tabelu, ali samo prvi dan je display:block
*/