define(['pipAPI', 'https://chaodwang.github.io/iat_qualtrics/st_iat/st_iat_full_cn.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'china', //Will appear in the data.
		    title : {
		      media : {word : '中国'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : '中国'}, 
    			{word : '长城'}, 
    			{word : '天安门'}, 
    			{word : '孔子'}, 
    			{word : '五星红旗'}, 
    			{word : '共产党'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'unpleasant', //Attribute label
			title : {
				media : {word : '贬义词'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '炸弹'},
				{word: '虐待'},
				{word: '悲伤'},
				{word: '痛苦'},
				{word: '毒药'},
				{word: '悲痛'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'pleasant', //Attribute label
			title : {
				media : {word : '褒义词'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '极乐'},
				{word: '愉快'},
				{word: '开心'},
				{word: '棒'},
				{word: '灿烂'},
				{word: '爱'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

});
  });
