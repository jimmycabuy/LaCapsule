var ctx = document.getElementById("myChart");

var female = ctx.dataset.female;
var male = ctx.dataset.male;

new Chart(ctx, {

    type: "bar",
    data: {
        labels: ["Femmes", "Hommes"],
        datasets: [{
            data: [female, male],

        }]
    }
});


var ctx = document.getElementById("doughnut");

new Chart(ctx, {

    type: "doughnut",
    data: {
        labels: ["Femmes", "Hommes"],
        datasets: [{
            data: [9, 9],

        }]
    }
});
