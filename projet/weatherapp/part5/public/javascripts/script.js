var mymap = L.map('worldmap', {
    center: [50.8504, 4.3488],
    zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);


var cityFromData = document.getElementsByClassName("city-card");
// var nameFromData = document.getElementsByClassName("city-card");

// var customIcon = L.icon({
//     iconUrl: './images/marker.png',
//     // shadowUrl: 'leaf-shadow.png',

//     iconSize: [70, 70],
//     shadowSize: [50, 64],

//     iconAnchor: [22, 94],
//     // shadowAnchor: [4, 62],

//     popupAnchor: [20, -9]
// });

for (var i = 0; i < cityFromData.length; i++) {

    var nom = cityFromData[i].dataset.name;
    var longitude = cityFromData[i].dataset.lon;
    var lattitude = cityFromData[i].dataset.lat;
    L.marker([lattitude, longitude], /* {icon: customIcon} */ ).addTo(mymap).bindPopup(nom);
}