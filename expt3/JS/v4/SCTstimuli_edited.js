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
	
    for (i=1; i < 80; i++)
	{
		if (StimProbBlock[i] == StimProbBlock[i-1])
		{
			StimProbBlock.push(StimProbBlock[i]);
			StimProbBlock.splice(i, 1);
		}
		if (StimProbBlock1[i] == StimProbBlock1[i-1])
		{
			StimProbBlock1.push(StimProbBlock1[i]);
			StimProbBlock1.splice(i, 1);
		}
	}
    
	StimProbTotal = StimProbTotal.concat(StimProbBlock,StimProbBlock1);
    var StimuliPresented = [];

    function Prep()
    {
    for (i=0; i<160; i++) 
	{
		if (StimProbTotal[i] == 0) // I've kept the same format as in other expt, though now stim are 50:50
		{
			StimuliPresented[i] = 1;
		}
		else if (StimProbTotal[i] == 1)
		{
			StimuliPresented[i] = 2;
		}
		else if (StimProbTotal[i] == 2)
		{
			StimuliPresented[i] = 3;
		}
		else if (StimProbTotal[i] == 3)
		{
			StimuliPresented[i] = 4;
		}
        else if (StimProbTotal[i] == 4)
		{
			StimuliPresented[i] = 1;
		}
        else if (StimProbTotal[i] == 5)
        {
            StimuliPresented[i] = 2;
        }
		else if (StimProbTotal[i] == 6) 
		{
			StimuliPresented[i] = 3;
		}
        else if (StimProbTotal[i] == 7)
        {
            StimuliPresented[i] = 4;
        }
	}
    console.log(StimuliPresented);
    }
	
	//Number References for Stroop
	// 1 blue-blue
	// 2 red-red
	// 3 green-green
	// 4 yellow-yellow
	// 6 blue-yellow
	// 10 red-green
	// 12 yellow-blue
	// 14 green-red
	
    //each stim being shown 16 times means each color needs to be shown 4 times each
	var IncongBlock1Cue1 = shuffle([1,1,6,6,4,4,12,12,2,2,10,10,3,3,14,14,1,2,12,14]);
    var IncongBlock1Cue2 = shuffle([1,1,6,6,4,4,12,12,2,2,10,10,3,3,14,14,3,4,6,10]);
	var CongBlock1Cue1 = shuffle([1,1,6,6,4,4,12,12,2,2,10,10,3,3,14,14,1,2,12,14]);
	var CongBlock1Cue2 = shuffle([1,1,6,6,4,4,12,12,2,2,10,10,3,3,14,14,3,4,6,10]);
	var IncongBlock2Cue1 = shuffle([1,1,6,6,4,4,12,12,2,2,10,10,3,3,14,14,3,4,6,10]);
	var IncongBlock2Cue2 = shuffle([1,1,6,6,4,4,12,12,2,2,10,10,3,3,14,14,1,2,12,14]);
	var CongBlock2Cue1 = shuffle([1,1,6,6,4,4,12,12,2,2,10,10,3,3,14,14,3,4,6,10]); 
	var CongBlock2Cue2 = shuffle([1,1,6,6,4,4,12,12,2,2,10,10,3,3,14,14,1,2,12,14]);
    
    var IncongStimCue1 = []; 
	IncongStimCue1 = IncongStimCue1.concat(IncongBlock1Cue1, IncongBlock2Cue1);
	var IncongStimCue2 = [];
	IncongStimCue2 = IncongStimCue2.concat(IncongBlock1Cue2, IncongBlock2Cue2);
	var CongStimCue1 = [];
	CongStimCue1 = CongStimCue1.concat(CongBlock1Cue1, CongBlock2Cue1);
	var CongStimCue2 = [];
	CongStimCue2 = CongStimCue2.concat(CongBlock1Cue2, CongBlock2Cue2);
	var Incong1Counter = 0;
	var Incong2Counter = 0;
	var Cong1Counter = 0;
	var Cong2Counter = 0;
	var StroopNum = [];
	
	function Prep2()
    {
    for (i=0; i<160; i++) 
	{
		if (StimuliPresented[i] == 1)
		{
			StroopNum[i] = IncongStimCue1[Incong1Counter];
			Incong1Counter = Incong1Counter + 1;
		}
		else if (StimuliPresented[i] == 2)
		{
			StroopNum[i] = IncongStimCue2[Incong2Counter];
			Incong2Counter = Incong2Counter + 1;
		}
		else if (StimuliPresented[i] == 3)
		{
			StroopNum[i] = CongStimCue1[Cong1Counter];
			Cong1Counter = Cong1Counter + 1;
		}
		else if (StimuliPresented[i] == 4)
		{
			StroopNum[i] = CongStimCue2[Cong2Counter];
			Cong2Counter = Cong2Counter + 1;
		}
	}
    console.log(StroopNum);
	console.log(Incong1Counter);
	console.log(Incong2Counter);
	console.log(Cong1Counter);
	console.log(Cong2Counter);
    }
	
	
