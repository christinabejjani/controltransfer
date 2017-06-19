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
    
    //now making this task 50:50, i.e., non predictive images preceding the scene images
	
    var VPair1 = []; // S1 with scene 1
    var VPair2 = []; // S2 with scene 1
    var VPair3 = []; // S3 with scene 1
    var VPair4 = []; // S4 with scene 2
    var V2Pair1 = []; //S1 with scene 2
    var V2Pair2 = []; //S2 with scene 2
    var V2Pair3 = []; //S3 with scene 2
	var V2Pair4 = []; //S4 with scene 2	
    var V3Pair1 = [];  // scene 3
    var V3Pair2 = [];
    var V3Pair3 = [];
	var V3Pair4 = [];
    var V4Pair1 = []; // scene 4
    var V4Pair2 = [];
    var V4Pair3 = [];
    var V4Pair4 = [];
    
	for (i=0; i < 3; i++) // 60 total trials per block, with the S1 images shown 4 times per scene
	{
	VPair1=VPair1.concat(1); //S1 with scene 1
	VPair2=VPair2.concat(2); // S2 with scene 1
	VPair3=VPair3.concat(3); // S3 with scene 1
	VPair4=VPair4.concat(4); //S4 with scene 1
	V2Pair1=V2Pair1.concat(5); //S1 with scene 2
	V2Pair2=V2Pair2.concat(6); // S2 with scene 2
	V2Pair3=V2Pair3.concat(7); // S3 with scene 2
	V2Pair4=V2Pair4.concat(8); //S4 with scene 2
	V3Pair1=V3Pair1.concat(9); //S1 with scene 3
	V3Pair2=V3Pair2.concat(10); // S2 with scene 3
	V3Pair3=V3Pair3.concat(11); // S3 with scene 3
	V3Pair4=V3Pair4.concat(12); //S4 with scene 3
	V4Pair1=V4Pair1.concat(13); //S1 with scene 4
	V4Pair2=V4Pair2.concat(14); // S2 with scene 4
	V4Pair3=V4Pair3.concat(15); // S3 with scene 4
	V4Pair4=V4Pair4.concat(16); //S4 with scene 4
	}
    
	var APBlock1 = [];
    var APBlock2 = [];
    var APBlock3 = [];
    var APBlock4 = [];
    	
    //arranged each so that each number was never in the same order before shuffling
	APBlock1 = APBlock1.concat(VPair1,V3Pair3,V2Pair2,V4Pair4,V2Pair1,VPair2,V3Pair4,V4Pair3,V2Pair4,V3Pair1,VPair3,V4Pair2,V2Pair3,V3Pair2,V4Pair1,VPair4,1,2,3,5,7,8,10,11,12,13,14,16); //no 4,6,9,15
    shuffle(APBlock1);
    APBlock2 = APBlock2.concat(V4Pair4,VPair1,V3Pair3,V2Pair2,VPair2,V2Pair1,V4Pair3,V3Pair4,VPair3,V4Pair2,V2Pair4,V3Pair1,VPair4,V4Pair1,V2Pair3,V3Pair2,1,2,4,6,7,8,9,10,11,13,15,16); // no 3,5,12,14
    shuffle(APBlock2);
    APBlock3 = APBlock3.concat(V3Pair3,V2Pair2,V4Pair4,VPair1,V3Pair4,V4Pair3,V2Pair1,VPair2,V3Pair1,VPair3,V4Pair2,V2Pair4,V3Pair2,V2Pair3,VPair4,V4Pair1,1,3,4,5,6,7,9,10,12,14,15,16); //no 2,8,11,13
    shuffle(APBlock3);
    APBlock4 = APBlock4.concat(V2Pair2,V4Pair4,VPair1,V3Pair3,V4Pair3,V3Pair4,VPair2,V2Pair1,V4Pair2,V2Pair4,V3Pair1,VPair3,V4Pair1,VPair4,V3Pair2,V2Pair3,2,3,4,5,6,8,9,11,12,13,14,15); //no 1,7,10,16
    shuffle(APBlock4);
    
    var StimuliPresented = [];

    function Prep()
    {
		for (i=1; i < 60; i++) // for each block, if there's a repeat, i push the number to the end and delete it where it used to be. this should limit the # of repetitions without actually fixing the sequences.
		//we want to avoid stim reps because that will lead to unnaturally fast RTs
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
		//not a foolproof method, but does reduce the number significantly
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
	
    StimuliPresented = StimuliPresented.concat(APBlock1,APBlock2,APBlock3,APBlock4);
    console.log(StimuliPresented);
    
    }
    
