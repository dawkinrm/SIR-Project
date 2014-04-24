function sirModel() {
    //use 0.5 and 0.3 respectively if this doesn't work

    var infectRates = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    var infectRate = infectRates[Math.floor(Math.random() * infectRates.length)];
    var removalRates = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    var removalRate = removalRates[Math.floor(Math.random() * removalRates.length)];
    var addedTime = 0;

    var S = 75;
    var I = 1;
    var R = 0;

    var N = Math.round(S + I + R);

    var sList = [];
    var iList = [];
    var rList = [];
    var time = [];
    var display = [];
    var display2 = [];
    var display3 = [];

    var x = document.getElementById("slist");
    var y = document.getElementById("ilist");
    var z = document.getElementById("rlist");

    var cure = false;

    while (!cure && S !== 0) {
        var newInfected = 0;

        for (var i = 0; i < S; i++) {
            if (Math.random() < infectRate * (I / N)) newInfected++;
        }

        var recovered = 0;

        for (var i = 0; i < I; i++) {
            if (Math.random() < removalRate) recovered++;
        }

        S -= newInfected;
        I += (newInfected - recovered);

        if (I === 0) {
            I = 1;
            recovered -= 1;
        }

        R += recovered;

        sList.push(S);
        iList.push(I);
        rList.push(R);

        addedTime++;
        time.push(addedTime);
    }

    for (var i = 0; i < sList.length; i++) {
        var combined = [time[i]];
        combined.push(sList[i]);
        display.push(combined);

    }

    for (var i = 0; i < iList.length; i++) {
        var combined2 = [time[i]];
        combined2.push(iList[i]);
        display2.push(combined2);

    }

    for (var i = 0; i < rList.length; i++) {
        var combined3 = [time[i]];
        combined3.push(rList[i]);
        display3.push(combined3);

    }

    //document.write(display);

    var myChart = new JSChart('chartcontainer', 'line');
    myChart.setDataArray(display, 'line1');
    //myChart.setLineSpeed(100);
    //myChart.setBackgroundColor('#B0B0B0');
    myChart.setTitle('Susceptibles vs. Time');
    myChart.setAxisColor('#000000');
    myChart.setAxisValuesColor('#000000');
    myChart.setTitleColor('#000000');
    myChart.setAxisNameX('Time');
    myChart.setAxisNameColorX('#000000');
    myChart.setAxisNameY('S');
    myChart.setAxisNameColorY('#000000');
    myChart.setLineColor('#006633', 'line1');
    myChart.setGrid(false);
    myChart.draw();

    var myChart2 = new JSChart('chartcontainer2', 'line');
    myChart2.setDataArray(display2, 'line2');
    myChart2.setTitle('Infected vs. Time');
    myChart2.setAxisColor('#000000');
    myChart2.setAxisValuesColor('#000000');
    myChart2.setTitleColor('#000000');
    myChart2.setAxisNameColorX('#000000');
    myChart2.setAxisNameX('Time');
    myChart2.setAxisNameColorY('#000000');
    myChart2.setAxisNameY('I');
    myChart2.setLineColor('#000099', 'line2');
    myChart2.setGrid(false);
    myChart2.draw();

    var myChart3 = new JSChart('chartcontainer3', 'line');
    myChart3.setDataArray(display3, 'line3');
    myChart3.setTitle('Recovered vs. Time');
    myChart3.setAxisColor('#000000');
    myChart3.setAxisValuesColor('#000000');
    myChart3.setTitleColor('#000000');
    myChart3.setAxisNameColorX('#000000');
    myChart3.setAxisNameX('Time');
    myChart3.setAxisNameColorY('#000000');
    myChart3.setAxisNameY('R');
    myChart3.setLineColor('#FF0000', 'line3');
    myChart3.setGrid(false);
    myChart3.draw();

    var myChart4 = new JSChart('chartcontainer4', 'line');
    myChart4.setTitle('SIR vs. Time');
    myChart4.setAxisColor('#000000');
    myChart4.setAxisValuesColor('#000000');
    myChart4.setTitleColor('#000000');
    myChart4.setAxisNameColorX('#000000');
    myChart4.setAxisNameX('Time');
    myChart4.setAxisNameColorY('#000000');
    myChart4.setAxisNameY('SIR');
    myChart4.setDataArray(display, 'line1');
    myChart4.setLineColor('#006633', 'line1');
    myChart4.setDataArray(display2, 'line2');
    myChart4.setLineColor('#000099', 'line2');
    myChart4.setDataArray(display3, 'line3');
    myChart4.setLineColor('#FF0000', 'line3');
    myChart4.setGrid(false);
    myChart4.draw();


    sList.toString();
    iList.toString();
    rList.toString();

    x.innerHTML = sList.slice(0, 50);
    y.innerHTML = iList.slice(0, 50);
    z.innerHTML = rList.slice(0, 50);
}