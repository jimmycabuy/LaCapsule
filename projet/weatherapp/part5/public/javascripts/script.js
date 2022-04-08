var mymap = L.map('worldmap', {
    center: [50.8504, 4.3488],
    zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);




var cityFromData = document.getElementsByClassName("city-card");
var nameFromData = document.getElementsByClassName("city-card");
for (var i = 0; i < cityFromData.length; i++) {

    var nom = nameFromData[i].dataset.name;
    var longitude = cityFromData[i].dataset.lon;
    var lattitude = cityFromData[i].dataset.lat;
    L.marker([lattitude, longitude]).addTo(mymap).bindPopup(nom);
}