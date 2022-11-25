const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getWeather(city){
    
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&lang=eng&units=metric&appid=51e793b210bf875a364611e231f2315f`;
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    debugger;
    console.log(respData);
    fillCard(respData);
    }

function fillCard(data){
    const weather = data.weather[0];
    const temprature = data.main;
    const cardHTML = `
    <div class="card">
    
    <table>
    <tr>
    <td><h1>${data.name}</h1></td>
    <td><h3>${temprature.temp} &deg;C </h3></td>
    </tr>
    <tr>
    <td>
    <img class="icon" src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}" /> </td><td>
    <h5>${weather.description.toUpperCase()}</h5>
    </td>
       
    </div>
    `;

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const city = search.value;
    if(city){
        getWeather(city);
        search.value="";
    }
});