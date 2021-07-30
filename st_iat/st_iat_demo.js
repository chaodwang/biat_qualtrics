define(['pipAPI', 'https://cdn.jsdelivr.net/gh/chaodwang/iat_qualtrics/st_iat/st_iat_full_cn.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : '科技', //Will appear in the data.
		    title : {
		      media : {word : '科技'}, //Name of the category presented in the task.
		      css : {color:'#000080','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    {word : '高能物理'}, 
    			{word : '基因编辑'}, 
    			{word : '卷积计算'}, 
    			{word : '无人驾驶'}, 
    			{word : '量子计算'},
				{word : '智能家居'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#000000','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : '贬义词', //Attribute label
			title : {
				media : {word : '贬义词'}, //Name of the category presented in the task.
				css : {color:'#000080','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '愚蠢至极'},
				{word: '笨口拙舌'},
				{word: '藏污纳垢'},
				{word: '千疮百孔'},
				{word: '惶恐不安'},
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
				css : {color:'#000080','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: '聪明伶俐'},
				{word: '吉祥如意'},
				{word: '大获成功'},
				{word: '开怀大笑'},
				{word: '高风亮节'},
				{word: '勤学苦练'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},

});
  });
