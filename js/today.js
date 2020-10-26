const date = document.querySelectorAll('.javascript');

function getJSON(url) {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', url);
   xhr.onload = () => {
      if(xhr.status === 200) {
         let data = JSON.parse(xhr.response);
         var today = data.current;
         document.getElementById('today').innerHTML = `${today[x].condition} <img src="${today[x].day.condition.icon}">`;  
         return data;
      }
   };
   xhr.send();
}
window.onload =  (event) => {
   getJSON(`http://api.weatherapi.com/v1/current.json?key=0ae0f3837e6247aaa94201900202010&q=Glendale`)
};
