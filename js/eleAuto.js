(function(){
	$(function(){
		init('iframe',1,'baidu')
		init('video',1,'video');
	})
	
	function init(ele,num,type){
	    var numTemp = parseInt(num) - 1;
	    if ($(ele).length > 0) {
	        var eleObj = $(ele).eq(numTemp);
	        var eleObjParent = eleObj.parent();
	        var eleObjParentWidthTemp = eleObjParent.css("width");

	        var eleObjParentWidth = eleObjParentWidthTemp.substr(0, eleObjParentWidthTemp.indexOf('p'));
	        var eleObjParentHeightTemp = eleObjParent.css("height");
	        var eleObjParentHeight = eleObjParentHeightTemp.substr(0, eleObjParentHeightTemp.indexOf('p'));

	        eleObj.attr("width", eleObjParentWidth);
            
	        if (type == 'video' && ele == 'video') {
	            eleObj.removeAttr("height");
	            eleObj.css("height", "auto");
	            eleObj.attr("preload", "meta");
	        }
	       
	        if (type == 'baidu' && ele == 'iframe') {
	            eleObj.attr("height", eleObjParentHeight);

	            var baidumapiframeSrc = eleObj.attr("src");
	            var baidumapiframeSrcArray = baidumapiframeSrc.split('&');

	            var baidumapWidthArray = baidumapiframeSrcArray[2].split('=');
	            baidumapWidthArray[1] = eleObjParentWidth;
	            baidumapiframeSrcArray[2] = baidumapWidthArray.join('=');

	            var baidumapHeightArray = baidumapiframeSrcArray[3].split('=');
	            baidumapHeightArray[1] = eleObjParentHeight;
	            baidumapiframeSrcArray[3] = baidumapHeightArray.join('=');

	            var baidumapiframeSrcNew = baidumapiframeSrcArray.join('&');
	            eleObj.attr("src", baidumapiframeSrcNew);
	            var baidumapiframeNew = $(ele).eq(num).parent();
	            var baidumapiframeNewHtml = baidumapiframeNew.html();
	            $(ele).eq(num).replaceWith(baidumapiframeNewHtml);
	        }
	    }

		
	}
})()