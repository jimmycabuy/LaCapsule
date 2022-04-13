var bar = document.getElementById("myChart");

var female = bar.dataset.female;
var male = bar.dataset.male;

new Chart(bar, {

    type: "bar",
    data: {
        labels: ["Femmes", "Hommes"],
        datasets: [{
            data: [female, male],

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
        }]
    }
});