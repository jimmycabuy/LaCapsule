var bar = document.getElementById("chartBar");

var female = bar.dataset.female;
var male = bar.dataset.male;

new Chart(bar, {

    type: "bar",
    data: {
        labels: ["Femmes", "Hommes"],
        datasets: [{
            data: [female, male],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
});

var donut = document.getElementById("doughnut");

var unread = donut.dataset.unread;
var read = donut.dataset.read;

new Chart(donut, {

    type: "doughnut",
    data: {
        labels: ["Lu", "Non lu"],
        datasets: [{
            data: [read, unread],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
});

var pie = document.getElementById("chartpie");

var shipped = pie.dataset.shipped;
var unshipped = pie.dataset.unshipped;

new Chart(pie, {

    type: "pie",
    data: {
        labels: ["Expédié", "Non expédié"],
        datasets: [{
            data: [shipped, unshipped],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
});