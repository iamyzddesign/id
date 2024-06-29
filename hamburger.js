function showMenu() {
	var x = document.getElementById('hamburger').innerHTML;
	console.log(x);
	if(x=="☰") {
		console.log("close");
		document.getElementById('hamburger').innerHTML="Menu";
		document.getElementById('menu_vertikal').style.display="none";
	}else {
		console.log("hamburger");
		document.getElementById('hamburger').innerHTML="☰";
		document.getElementById('menu_vertikal').style.display="block";
	}
}

function showMenuCategory() {
	var x = document.getElementById('hamburger-size').innerHTML;
	console.log(x);
	if(x=="☰") {
		console.log("close");
		document.getElementById('hamburger-size').innerHTML="Categories";
		document.getElementById('menu-size').style.display="none";
	}else {
		console.log("hamburger-size");
		document.getElementById('hamburger-size').innerHTML="☰";
		document.getElementById('menu-size').style.display="block";
	}
}

function showMenuResolution() {
	var x = document.getElementById('hamburger-size').innerHTML;
	console.log(x);
	if(x=="☰") {
		console.log("close");
		document.getElementById('hamburger-size').innerHTML="Resolution";
		document.getElementById('menu-size').style.display="none";
	}else {
		console.log("hamburger-size");
		document.getElementById('hamburger-size').innerHTML="☰";
		document.getElementById('menu-size').style.display="block";
	}
}