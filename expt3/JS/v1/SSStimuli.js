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
    
    //this is now about making specific stimulus pair matrices
	
    var VPair1 = []; // right pair for stim 1
    var VPair2 = []; // right pair for stim 2
    var VPair3 = [];
    var VPair4 = [];
    var IVPair1 = []; // wrong match for stim 1
    var IVPair2 = []; // wrong match for stim 1
    var IVPair3 = []; // wrong match for stim 1
    var IV1Pair1 = []; // wrong match for stim 2 etc.
    var IV1Pair2 = [];
    var IV1Pair3 = [];
    var IV2Pair1 = [];
    var IV2Pair2 = [];
    var IV2Pair3 = [];
    var IV3Pair1 = [];
    var IV3Pair2 = [];
    var IV3Pair3 = [];
    
	for (i=0; i < 12; i++) // 48 total valid trials in block of 60 split by 4 is 12 per stim
	{
	VPair1=VPair1.concat(1); //stim 1 with stim 1
	VPair2=VPair2.concat(2); // for stim 2
	VPair3=VPair3.concat(3); // stim 3
	VPair4=VPair4.concat(4); // stim 4
	}
	
    for (i=0; i < 1; i++) // 12 total invalid trials in block of 60 split by wrong pair type (3) is 4 trials each
	{
	IVPair1=IVPair1.concat(5); // 5 means stim 1 with stim 2
	IVPair2=IVPair2.concat(6); // 6 means stim 1 with stim 3
	IVPair3=IVPair3.concat(7); // 7 means stim 1 with stim 4
	IV1Pair1=IV1Pair1.concat(8); // 8 means stim 2 with stim 1
    IV1Pair2=IV1Pair2.concat(9); // 9 means stim 2 with stim 3
	IV1Pair3=IV1Pair3.concat(10); // 10 means stim 2 with stim 4
	IV2Pair1=IV2Pair1.concat(11); // 11 means stim 3 with stim 1
    IV2Pair2=IV2Pair2.concat(12); // 12 means stim 3 with stim 2
	IV2Pair3=IV2Pair3.concat(13); // 13 means stim 3 with stim 4
	IV3Pair1=IV3Pair1.concat(14); // 14 means stim 4 with stim 1
    IV3Pair2=IV3Pair2.concat(15); // 15 means stim 4 with stim 2
	IV3Pair3=IV3Pair3.concat(16); // 16 means stim 4 with stim 3
	}
    
	var APBlock1 = [];
    var APBlock2 = [];
    var APBlock3 = [];
    var APBlock4 = [];
    	
    //arranged each so that each number was never in the same order before shuffling
	APBlock1 = APBlock1.concat(VPair1,IVPair1,IV1Pair1,IV2Pair1,IV3Pair1,VPair2,IVPair2,IV1Pair2,IV2Pair2,IV3Pair2,VPair3,IVPair3,IV1Pair3,IV2Pair3,IV3Pair3,VPair4);
    shuffle(APBlock1);
    APBlock2 = APBlock2.concat(VPair4,IV3Pair3,IVPair1,IV1Pair3,VPair3,IVPair2,IV1Pair1,IV3Pair2,VPair2,IV2Pair1,IV2Pair3,IV2Pair2,VPair1,IV3Pair1,IVPair3,IV1Pair2);
    shuffle(APBlock2);
    APBlock3 = APBlock3.concat(IV3Pair1,VPair3,IV1Pair2,IVPair1,IVPair3,VPair1,IV3Pair2,IV1Pair3,IV2Pair3,VPair4,IV2Pair2,IV2Pair1,IVPair2,IV3Pair3,VPair2,IV1Pair1);
    shuffle(APBlock3);
    APBlock4 = APBlock4.concat(VPair2,IV1Pair2,IV1Pair3,IV1Pair1,IV2Pair3,IV2Pair1,VPair4,IVPair3,IV3Pair2,IVPair1,IVPair2,VPair1,IV3Pair3,IV3Pair1,VPair3,IV2Pair2);
    shuffle(APBlock4);
    
    var StimuliPresented = [];

    function Prep()
    {
		for (i=1; i < 60; i++) // for each block, if there's a repeat, i push the number to the end and delete it where it used to be. this should limit the # of repetitions without actually fixing the sequences.
		//we want to avoid direct stim reps because that will lead to unnaturally fast RTs
		{
			if (APBlock1[i] == APBlock1[i-1])
			{
				APBlock1.push(APBlock1[i]);
				APBlock1.splice(i, 1);
			}
			if (APBlock2[i] == APBlock2[i-1])
			{
				APBlock2.push(APBlock2[i]);
				APBlock2.splice(i, 1);
			}
			if (APBlock3[i] == APBlock3[i-1])
			{
				APBlock3.push(APBlock3[i]);
				APBlock3.splice(i, 1);
			}
            if (APBlock4[i] == APBlock4[i-1])
			{
				APBlock4.push(APBlock4[i]);
				APBlock4.splice(i, 1);
			}
		
		}
	
		for (i=1; i < 60; i++) // this is in case there are repetitions at the end of each block; puts them in the front of the block then
		//not a foolproof method but does reduce the #
		{
			if (APBlock1[i] == APBlock1[i-1])
			{
				APBlock1.unshift(APBlock1[i]);
				APBlock1.splice(i, 1);
			}
			if (APBlock2[i] == APBlock2[i-1])
			{
				APBlock2.unshift(APBlock2[i]);
				APBlock2.splice(i, 1);
			}
			if (APBlock3[i] == APBlock3[i-1])
			{
				APBlock3.unshift(APBlock3[i]);
				APBlock3.splice(i, 1);
			}
			if (APBlock4[i] == APBlock4[i-1])
			{
				APBlock4.unshift(APBlock4[i]);
				APBlock4.splice(i, 1);
			}
		}
	
		for (i=1; i < 60; i++) // on the off-chance that a repeat happened at the beginning of the block because of previous transformations, another put at the end type
		{
			if (APBlock1[i] == APBlock1[i-1])
			{
				APBlock1.push(APBlock1[i]);
				APBlock1.splice(i, 1);
			}
			if (APBlock2[i] == APBlock2[i-1])
			{
				APBlock2.push(APBlock2[i]);
				APBlock2.splice(i, 1);
			}
			if (APBlock3[i] == APBlock3[i-1])
			{
				APBlock3.push(APBlock3[i]);
				APBlock3.splice(i, 1);
			}
            if (APBlock4[i] == APBlock4[i-1])
			{
				APBlock4.push(APBlock4[i]);
				APBlock4.splice(i, 1);
			}
		
		}
	
	//now I will finally concatenate the matrix; I log to the console b/c that's an easy way of checking if something has gone wrong.
    StimuliPresented = StimuliPresented.concat(APBlock1,APBlock2,APBlock3,APBlock4);
    console.log(StimuliPresented);
    
    }
    
