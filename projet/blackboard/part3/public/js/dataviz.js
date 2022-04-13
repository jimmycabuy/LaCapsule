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

var linechart = document.getElementById("linechart");

var data = JSON.parse(linechart.dataset.ca);

var userCountByMonthLabels = [];
var userCountByMonthDataResults = [];

for (var i = 0; i < data.length; i++) {
    var date = new Date((data[i]._id.year), (data[i]._id.month - 1), 1)
    var month = date.toLocaleString('default', {
        month: 'long'
    })

    userCountByMonthLabels.push(month)

    userCountByMonthDataResults.push(data[i].CA)
}

new Chart(linechart, {
    type: "line",
    options: {
        plugins: {
            title: {
                display: true,
                text: "Chiffre d'affaires par mois"
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
    data: {
        labels: userCountByMonthLabels,
        datasets: [{
            data: userCountByMonthDataResults,
            lineTension: 0.4,
            backgroundColor: '#F6D7A7',
            pointBackgroundColor: '#F6D7A7',
            fill: {
                target: 'origin',
                above: '#F6D7A7'
            }
        }]
    }
});