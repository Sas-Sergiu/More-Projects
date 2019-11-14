var images = ["img1.jpg", "img2.jpg", "img3.jpg"];

var i = 0;

function next(){
	var slider = document.getElementById("slider");
	i++;
	if (i >= images.length){
		i = 0;
	}
	slider.src = images[i];
}




function prev(){
	var slider = document.getElementById("slider");
	i--;
	if (i < 0){
		i = images.length-1;
	}
	slider.src = images[i];
}