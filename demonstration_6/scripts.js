//VARIABLES FOR TIME



//ARRAYS FOR RANDOM
var fonts = ["monospace", "cursive", "serif", "sans-serif", "impact" ];
var letterspacing = [0, 5, 10, 15];


//FUNCTION TO UPLOAD IMAGE   
function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();
       reader.onloadend = function () {
        preview.src = reader.result;
       }
       if (file) {
        reader.readAsDataURL(file); //reads the data as a URL   
       } else {
        preview.src = "";
       }
var date = new Date();
var year=date.getFullYear();
var month=date.getMonth();
var days=date.getDay();
var minites=date.getMinutes();
var seconds=date.getSeconds();

var timestamp = month + "/" + day + "/" + year + " " + hours + ":" + minites + ":" + seconds;
	$("#date").text(timestamp);
  }

//FUNCTION TO UPLOAD/STYLE TEXT AND SUBMIT TIMESTAMP  

function append(){
	
	var newText = $('#textarea').val();
	$('#text').text(newText);
	
	var newFont = fonts[Math.floor( Math.random()*fonts.length )]
	var newSpacing = letterspacing[Math.floor( Math.random()*fonts.length )]
	
	$('#text').css('font-family' , newFont);
	$('#text').css('letter-spacing' , newSpacing);
}
//ADD RANDOM COLOR TO #RIGHT BG
