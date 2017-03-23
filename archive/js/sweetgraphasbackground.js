var ctx = document.getElementById("developer-graph");
var barsCount = 10;
var random_data = [];
var random_colors = [];
var labels = [];

var randomColorGenerator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};

////push random data
for (var i = barsCount - 1; i >= 0; i--) {
    random_data.push(Math.round(Math.random() * 100));
    random_colors.push(randomColorGenerator());
    labels.push(i);
};

var data = [{
            //label: '# of Votes',
            data: random_data,
            backgroundColor: random_colors,
            borderColor: [],
            borderWidth: 1
        }];

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: data
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
         },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                gridLines: {
                    display:false
                }  
            }]
        }
    }
});