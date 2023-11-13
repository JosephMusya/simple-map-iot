// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (you can use different tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Waziup-Wearable Tech'
}).addTo(map);

// Add a marker
// var marker = L.marker([51.5, -0.09]).addTo(map);

// Create a custom icon
var customIcon = L.icon({
    // iconUrl: 'https://imgs.search.brave.com/g3nekCv8EG7WMz3wt4sHz1dCvBYdCtrWRvMIfU2DPT0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vY2xpcGdy/b3VuZC5jb20vaW1h/Z2VzL2Nvdy1lYXIt/dGFnLWNsaXBhcnQu/anBn', // replace with the path to your custom marker image
    iconUrl:'./tag.webp',
    iconSize: [25, 32], // size of the icon
    iconAnchor: [16, 32], // point of the icon that corresponds to the marker's location
    popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
  });
  
  var marker = L.marker([51.5, -0.09], { icon: customIcon }).addTo(map);
  

// popup to the marker
marker.bindPopup(
    "<b>Animal Collar - AXCRE5</b> <br> <article>Location: 12.56, 23.55 - Nyeri lat/lng</article> <article>Health: Good</article><article>Walking posture: Not critical</article>"
).openPopup();