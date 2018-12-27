function popup() {
    let link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	if (confirm("Mmh, ça te dirait de venir t'amuser sur xxxvidsxxx mon grand bandit ?")){
		open(link);
	};
};

setTimeout(popup, 3000);




function psycheMod() {
	var back = document.getElementById("psyche");
		back.style.backgroundColor = "magenta";

	var para = document.getElementsByTagName("p");
		if(para.length > 0){
			for (var h = 0; h < para.length; h++){
				para[h].style["color"] = "blue";
				para[h].style["font-family"] = "papy";
			}
			}else{

			}

	var heading1 = document.getElementById("headOne");
		heading1.style.color = "green"
		heading1.style.fontFamily = "comic";

	var heading2 = document.getElementsByTagName("h2");
		if (heading2.length > 0){
			for (var i = 0; i < heading2.length; i++){
				heading2[i].style["color"] = "green";
				heading2[i].style["font-family"] = "comic";
			}
		}

	var heading3 = document.getElementsByTagName("h3");
		if (heading3.length > 0){
			for (var k = 0; k < heading3.length; k++){
				heading3[k].style["color"] = "green";
				heading3[k].style["font-family"] = "comic";
			}
		}
};