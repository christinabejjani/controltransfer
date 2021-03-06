		function shuffle(array) 
 		{
			var currentIndex = array.length, temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		}
	
	var Stimuli = [];
	var Stimuli1 = [];
	var Stimuli2 = [];
	var Stimuli3 = [];
	var Stimuli4 = [];
	var Stimuli5 = [];
	var Stimuli6 = [];
	var Stimuli7 = [];
	var StimProbTotal = [];
	var StimProbBlock = [];
	var StimProbBlock1 = [];
	var StimProbBlock2 = [];
	var StimProbBlock3 = [];
	
	//each image is presented equally - 20 times per 80 trial block. They are associated with congruent and incongruent trials equally.
	for (i=0; i < 10; i++) 
	{
	Stimuli=Stimuli.concat(0); // incongruent for image 1
	Stimuli1=Stimuli1.concat(1); // incongruent for image 2
	Stimuli2=Stimuli2.concat(2); // congruent for image 3
	Stimuli3=Stimuli3.concat(3); // congruent for image 4
	Stimuli4=Stimuli4.concat(4); // congruent for image 1
	Stimuli5=Stimuli5.concat(5); // congruent for image 2
	Stimuli6=Stimuli6.concat(6); // incongruent for image 3
	Stimuli7=Stimuli7.concat(7); // incongruent for image 4
	}
	
	// to ensure that there's an equal number for each block as well as within the entire experiment
	StimProbBlock = StimProbBlock.concat(Stimuli,Stimuli1,Stimuli2,Stimuli3,Stimuli4,Stimuli5,Stimuli6,Stimuli7);
	shuffle(StimProbBlock);
	StimProbBlock1 = StimProbBlock1.concat(Stimuli7,Stimuli6,Stimuli5,Stimuli4,Stimuli3,Stimuli2,Stimuli1,Stimuli);
	shuffle(StimProbBlock1);
	
	StimProbTotal = StimProbTotal.concat(StimProbBlock,StimProbBlock1);
	
	var TrialType = [];
    var StimuliPresented = [];

    function Prep()
    {
    for (i=0; i<160; i++) 
	{
		if (StimProbTotal[i] == 0) // I've kept the same format as in other expt, though now stim are 50:50
		{
			StimuliPresented[i] = 1;
            TrialType[i] = 1; // 50% incongruent
		}
		else if (StimProbTotal[i] == 1)
		{
			StimuliPresented[i] = 2;
            TrialType[i] = 1; // 50% incongruent
		}
		else if (StimProbTotal[i] == 2)
		{
			StimuliPresented[i] = 3;
            TrialType[i] = 2; // 50% congruent
		}
		else if (StimProbTotal[i] == 3)
		{
			StimuliPresented[i] = 4;
            TrialType[i] = 2; // 50% congruent
		}
        else if (StimProbTotal[i] == 4)
		{
			StimuliPresented[i] = 1;
            TrialType[i] = 2; // 50% congruent
		}
        else if (StimProbTotal[i] == 5)
        {
            StimuliPresented[i] = 2;
            TrialType[i] = 2; // 50% congruent
        }
		else if (StimProbTotal[i] == 6) 
		{
			StimuliPresented[i] = 3;
            TrialType[i] = 1; // 50% incongruent
		}
        else if (StimProbTotal[i] == 7)
        {
            StimuliPresented[i] = 4;
            TrialType[i] = 1; // 50% incongruent
        }
	}
    console.log(StimuliPresented);
	console.log(TrialType);
    }
	
	var Cong = [];
	var Cong1 = [];
	var Cong2 = [];
	var Cong3 = [];
	var CongNumbers = [];
	var Incong = [];
	var Incong1 = [];
	var Incong2 = [];
	var Incong3 = [];
	var Incong4 = [];
	var Incong5 = [];
	var Incong6 = [];
	var Incong7 = [];
	var Incong8 = [];
	var Incong9 = [];
	var Incong10 = [];
	var Incong11 = [];
	var IncongNumbers = [];
	var Cong2nd = [];
	var Cong3rd = [];
	var Cong4th = [];
	var Incong2nd = [];
	var Incong3rd = [];
	var Incong4th = [];
	
	for (i=0; i < 10; i++) //160 trials, half of them will be congruent, so 80/4 = 20 cong types and split by block (2) into 10
	{
	Cong=Cong.concat(1); // 
	Cong1=Cong1.concat(2); // 
	Cong2=Cong2.concat(3); // 
	Cong3=Cong3.concat(4); // 
	}

	CongNumbers = CongNumbers.concat(Cong,Cong1,Cong2,Cong3);
	shuffle(CongNumbers);
	Cong2nd = Cong2nd.concat(Cong1,Cong2,Cong3,Cong);
	shuffle(Cong2nd);
	
	for (i=0; i < 3; i++) // 80 incongruent trials divided by 12 (types) * 2 (blocks)  = 3.33
	{
	Incong=Incong.concat(5); // 
	Incong1=Incong1.concat(6); // 
	Incong2=Incong2.concat(7); // 
	Incong3=Incong3.concat(8); //
	Incong4=Incong4.concat(9); // 
	Incong5=Incong5.concat(10); // 
	Incong6=Incong6.concat(11); // 
	Incong7=Incong7.concat(12); //
	Incong8=Incong8.concat(13); // 
	Incong9=Incong9.concat(14); // 
	Incong10=Incong10.concat(15); // 
	Incong11=Incong11.concat(16); //	
	}
	
    //chose 4 of 12 that didn't use the same button for the extras
	IncongNumbers = IncongNumbers.concat(Incong,Incong1,Incong2,Incong3,Incong4,Incong5,Incong6,Incong7,Incong8,Incong9,Incong10,Incong11,5,10,16,12);
	shuffle(IncongNumbers);
	Incong2nd = Incong2nd.concat(Incong11,Incong10,Incong9,Incong8,Incong7,Incong6,Incong5,Incong4,Incong3,Incong2,Incong1,Incong,14,6,8,13);
	shuffle(Incong2nd);

	for (i=1; i < 40; i++) // for each block, if there's a repeat, i push the number to the end and delete it where it used to be. this should limit the # of repetitions.
	{
		if (CongNumbers[i] == CongNumbers[i-1])
		{
			CongNumbers.push(CongNumbers[i]);
			CongNumbers.splice(i, 1);
		}
		if (IncongNumbers[i] == IncongNumbers[i-1])
		{
			IncongNumbers.push(IncongNumbers[i]);
			IncongNumbers.splice(i, 1);
		}
		if (Cong2nd[i] == Cong2nd[i-1])
		{
			Cong2nd.push(Cong2nd[i]);
			Cong2nd.splice(i, 1);
		}
		if (Incong2nd[i] == Incong2nd[i-1])
		{
			Incong2nd.push(Incong2nd[i]);
			Incong2nd.splice(i, 1);
		}
		
	}
	
	for (i=1; i < 40; i++) // this is in case there are repetitions at the end of each block; puts them in the front of the block then
	{
		if (CongNumbers[i] == CongNumbers[i-1])
		{
			CongNumbers.unshift(CongNumbers[i]);
			CongNumbers.splice(i, 1);
		}
		if (IncongNumbers[i] == IncongNumbers[i-1])
		{
			IncongNumbers.unshift(IncongNumbers[i]);
			IncongNumbers.splice(i, 1);
		}
		if (Cong2nd[i] == Cong2nd[i-1])
		{
			Cong2nd.unshift(Cong2nd[i]);
			Cong2nd.splice(i, 1);
		}
		if (Incong2nd[i] == Incong2nd[i-1])
		{
			Incong2nd.unshift(Incong2nd[i]);
			Incong2nd.splice(i, 1);
		}
			
	}
	
	for (i=1; i < 40; i++) // on the off-chance that a repeat happened at the beginning of the block because of previous transformations, another put at the end type
	{
		if (CongNumbers[i] == CongNumbers[i-1])
		{
			CongNumbers.push(CongNumbers[i]);
			CongNumbers.splice(i, 1);
		}
		if (IncongNumbers[i] == IncongNumbers[i-1])
		{
			IncongNumbers.push(IncongNumbers[i]);
			IncongNumbers.splice(i, 1);
		}
		if (Cong2nd[i] == Cong2nd[i-1])
		{
			Cong2nd.push(Cong2nd[i]);
			Cong2nd.splice(i, 1);
		}
		if (Incong2nd[i] == Incong2nd[i-1])
		{
			Incong2nd.push(Incong2nd[i]);
			Incong2nd.splice(i, 1);
		}
	}
	
	var CongFactor = [];
	var IncongFactor = [];
	CongFactor = CongFactor.concat(CongNumbers,Cong2nd);
	IncongFactor = IncongFactor.concat(IncongNumbers,Incong2nd);	
	console.log(CongFactor);
	console.log(IncongFactor);