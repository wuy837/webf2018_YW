$(document). ready(function(){
	var bgImages = ["e51.jpg","e52.jpg","e53.jpg","e54.jpg", ];
	var count = bgImages.length;
	var ticker = 0;
	var time = 0;
	var date = new Date()
	
	$("#date").text(date);
	
	 function screensaver() {
        var url = "url(" + bgImages[ticker] + ")"
        $("#screensaver").css("background-image", url);
        $("#ticker").text(ticker+1)
        ticker += 1;
        if (ticker == count) {
            ticker = 0;
        }
    };
	//screensaver();
	$(document).click(function(){
	
    //screensaver();
	})
	setInterval(function(){
		screensaver()
	},2000)
	$(document).mousemove(function(){
		ticker=0;
		time=0;
		$("#screensaver").css("opacity",0)
		$("#ticker").css("opacity",0)
		
	})
	setInterval(function(){
		time+=1;
		if(time>4){
			$("#screensaver").css("opacity",1)
		$("#ticker").css("opacity",1)
		
		}
		else{
			
		}
	},1000)
	
})