var bar = document.getElementById("chartBar");

var female = bar.dataset.female;
var male = bar.dataset.male;

new Chart(bar, {

    type: "bar",
    options: {
        plugins: {
            title: {
                display: true,
                text: "Nombres d'utilisateurs par sexe"
            },
            legend: {
                display: false
            }
        }
    },
    data: {
        labels: ["Femmes", "Hommes"],
        datasets: [{
            data: [female, male],
            backgroundColor: [
                '#BAABDA',
                '#B8B5FF'
            ]
        }]
    }
});

var donut = document.getElementById("doughnut");

var unread = donut.dataset.unread;
var read = donut.dataset.read;

new Chart(donut, {
    type: "doughnut",
    options: {
        plugins: {
            title: {
                display: true,
                text: "Nombres de messages lus et non-lus"
            }
        }
    },
    data: {
        labels: ["Lu", "Non lu"],
        datasets: [{
            data: [read, unread],
            backgroundColor: [
                '#FFB2A6',
                '#FF8AAE'
            ]
        }]
    }

});

var pie = document.getElementById("chartpie");

var shipped = pie.dataset.shipped;
var unshipped = pie.dataset.unshipped;

new Chart(pie, {

    type: "pie",
    options: {
        plugins: {
            title: {
                display: true,
                text: "Commandes payées, expédiées et non expédiées"
            }
        }
    },
    data: {
        labels: ["Expédié", "Non expédié"],
        datasets: [{
            data: [shipped, unshipped],
            backgroundColor: [
                '#97DBAE',
                '#C3E5AE'
            ]
        }]
    }
});