const date = document.querySelectorAll('.javascript');

function getJSON(url) {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', url);
   xhr.onload = () => {
      if(xhr.status === 200) {
         let data = JSON.parse(xhr.response);
         var date = data.location.localtime;
         document.getElementById('date').innerHTML = date; 
         document.getElementById('today') 
         return data;
      }
   };
   xhr.send();
}
window.onload =  (event) => {
   getJSON(`http://api.weatherapi.com/v1/current.json?key=0ae0f3837e6247aaa94201900202010&q=Glendale`)
};
