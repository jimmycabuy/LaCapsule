var ctx = document.getElementById("myChart");

new Chart(ctx, {

    type: "bar",
    data: {
        labels: ["Red", "Yellow", "Blue"],
        datasets: [{

            data: [13, 13, 13],

        }]
    }
});