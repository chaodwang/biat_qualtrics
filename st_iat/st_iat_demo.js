define(['pipAPI', 'https://chaodwang.github.io/iat_qualtrics/st_iat/st_iat_full_cn.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : '科技', //Will appear in the data.
		    title : {
		      media : {word : '科技'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		        {word : '科学'}, 
    			{word : '技术'}, 
    			{word : '算法'}, 
    			{word : '智能'}, 
    			{word : '交互'},
			{word : '科技'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#000000','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : '贬义', //Attribute label
			title : {
				media : {word : '贬义'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '愚蠢'},
				{word: '笨拙'},
				{word: '肮脏'},
				{word: '糟糕'},
				{word: '恐怖'},
				{word: '堕落'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},
		attribute2 : 
			{
			name : '褒义', //Attribute label
			title : {
				media : {word : '褒义'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '聪明'},
				{word: '吉祥'},
				{word: '成功'},
				{word: '开心'},
				{word: '荣耀'},
				{word: '勤奋'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},

});
  });
