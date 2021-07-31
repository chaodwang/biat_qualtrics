define(['pipAPI', 'https://chaodwang.github.io/iat_qualtrics/st_iat/st_iat_full_cn.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : '上海有关', //Will appear in the data.
		    title : {
		      media : {word : '上海有关'}, //Name of the category presented in the task.
		      css : {color:'#0000CD','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    {word : '陆家嘴'}, 
    			{word : '黄浦江'}, 
    			{word : '东方明珠'}, 
    			{word : '浦东新区'}, 
    			{word : '外滩'},
				{word : '人民广场'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#000000','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : '贬义词', //Attribute label
			title : {
				media : {word : '贬义词'}, //Name of the category presented in the task.
				css : {color:'#0000CD','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '愚蠢至极'},
				{word: '卖国贼'},
				{word: '藏污纳垢'},
				{word: '卑鄙'},
				{word: '假恶丑'},
				{word: '自甘堕落'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},
		attribute2 : 
			{
			name : '褒义词', //Attribute label
			title : {
				media : {word : '褒义词'}, //Name of the category presented in the task.
				css : {color:'#0000CD','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '乐开怀'},
				{word: '真善美'},
				{word: '大获成功'},
				{word: '快乐'},
				{word: '心地善良'},
				{word: '勤劳勇敢'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},

});
  });
