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

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Move', 'Percentage'],
        ["King's pawn (e4)", 44],
        ["Queen's pawn (d4)", 31],
        ["Knight to King 3 (Nf3)", 12],
        ["Queen's bishop pawn (c4)", 10],
        ['Other', 3]
    ]);

    var options = {
        // title: 'Chess opening moves',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        // legend: { position: 'none' },
        // chart: { subtitle: 'popularity by percentage' },
        axes: {
        x: {
            // 0: { side: 'top', label: 'White to move'} // Top x-axis.
        }
        },
        // bar: { groupWidth: "90%" }
    };

    var chart = new google.charts.Bar(document.getElementById('developer-graph'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
};

window.onresize = function(event) {
    drawStuff();
};

