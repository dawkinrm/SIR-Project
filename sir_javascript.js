function sirModel()
	{
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

		while(!cure && S !== 0)
		{
			var newInfected = 0;

			for(var i=0; i<S; i++)
			{
				if(Math.random() < infectRate*(I/N))
					newInfected++;
			}

			var recovered = 0;

			for(var i=0; i<I; i++)
			{
				if(Math.random() < removalRate)
					recovered++;
			}

			S -= newInfected;
			I += (newInfected - recovered);

			if(I === 0)
			{
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

		for(var i=0; i<sList.length; i++)
  		{
    		var combined = [time[i]];
    		combined.push(sList[i]);
        	display.push(combined);
         
  		}

  		for(var i=0; i<iList.length; i++)
  		{
    		var combined2 = [time[i]];
    		combined2.push(iList[i]);
        	display2.push(combined2);
         
  		}

  		for(var i=0; i<rList.length; i++)
  		{
    		var combined3 = [time[i]];
    		combined3.push(rList[i]);
        	display3.push(combined3);
         
  		}