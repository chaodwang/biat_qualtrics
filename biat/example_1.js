define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

	
	return iatExtension({
		practiceCategory1 : 
			{
				name : 'Mammals', //Will appear in the data.
				title : {
					media : {word : 'Mammals'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Height (because we need to know where to put the next item in the title)
					startStimulus : { 
					//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Dogs, Horses, Cows, Lions'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Dogs'}, 
					{word : 'Horses'}, 
					{word : 'Lions'}, 
					{word : 'Cows'}
				], 
				//Stimulus css (style of the stimuli)
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},	
			practiceCategory2 : 
			{
				name : 'Birds', 
				title : {
					media : {word : 'Birds'}, 
					css : {color:'#31b404','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Pigeons, Swans, Crows, Ravens'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Pigeons'}, 
					{word : 'Swans'}, 
					{word : 'Crows'}, 
					{word : 'Ravens'}
				], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			categories : [  //As many categories you need.
				{
					name : 'Pudong', //Will appear in the data.
					title : {
						media : {word : '浦东'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : '张江, 创业, 科技, 技术, X academy, 创新, 夏令营'}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 2
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : '创业'}, 
        			{word : '科技'}, 
        			{word : '技术'}, 
        			{word : 'X academy'}, 
        			{word : '创新'}, 
        			{word : '夏令营'}
					], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
				{
					name : 'USA', 
					title : {
						media : {word : '美国'}, 
						css : {color:'#31b404','font-size':'1.8em'}, 
						height : 4,
						startStimulus : {
							media : {word : '纽约, 洛杉矶, 硅谷, MIT, 纳斯达克, 谷歌'},  
							css : {color:'#31b404','font-size':'1em'}, 
							height : 2
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : '纽约'}, 
        			{word : '洛杉矶'}, 
        			{word : '硅谷'}, 
        			{word : 'MIT'}, 
        			{word : '纳斯达克'}, 
        			{word : '谷歌'}
					], 
					//Stimulus css
					stimulusCss : {color:'#31b404','font-size':'2em'}
				}
			]
			// base_url : {//Where are your images at?
			// image : 'https://baranan.github.io/minno-tasks/images/'
				
			} 
	});
});




{"mode":"full","isActive":false}
