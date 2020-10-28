function getJSON(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
       if(xhr.status === 200) {
          let data = JSON.parse(xhr.response);
          // Header
          document.getElementById('svg').innerHTML = `${data.location.name}, ${data.location.region} <img src="${data.current.condition.icon}" alt=""${data.current.condition.text} />`;
          document.getElementById('temps').innerHTML = `Now .............................................................. ${data.current.temp_f} &deg;<sup>f</sup>`;
          document.getElementById('humidity').innerHTML = `Humidity ...................................................... ${data.current.humidity}%`;
          document.getElementById('wind').innerHTML = `Wind Speed & Direction ............................ ${data.current.wind_mph}, ${data.current.wind_dir}`;
          document.getElementById('updated').innerHTML = `Updated: ${data.current.last_updated}`;
          return data;
       }
    };
    xhr.send();
}

function getJSON2(url) {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET', url);
    xhr1.onload = () => {
       if(xhr1.status === 200) {
          let data = JSON.parse(xhr1.response);
          document.getElementById('sun').innerHTML = `The sun will rise at ${data.astronomy.astro.sunrise} and will set at ${data.astronomy.astro.sunset}`;
          document.getElementById('moon').innerHTML = `The moon will rise at ${data.astronomy.astro.moonrise} and will set at ${data.astronomy.astro.moonset}`;
          return data;
       }
    };
    xhr1.send();
}

window.onload =  (event) => {
    getJSON(`http://api.weatherapi.com/v1/current.json?key=0ae0f3837e6247aaa94201900202010&q=85305`);
    getJSON2(`http://api.weatherapi.com/v1/astronomy.json?key=0ae0f3837e6247aaa94201900202010&q=Glendale&dt=2020-10-28`);
 };
 