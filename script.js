var r = 255;
var g = 255;
var b = 0;
var principal = document.getElementById("principal");

principal.innerHTML = "rgb( " + r + ", " + g + ", " + b + " );";

document.getElementById("range1").oninput = function() {
    r = this.value;
    var thergb = "rgb(" + r + "," + g + "," + b + ")"; 
    principal.innerHTML = thergb;
	principal.style.backgroundColor=thergb;
}
document.getElementById("range2").oninput = function() {
    g = this.value;
    var thergb = "rgb(" + r + "," + g + "," + b + ")"; 
    principal.innerHTML = thergb;
	principal.style.backgroundColor=thergb;
}
document.getElementById("range3").oninput = function() {
    b = this.value;
    var thergb = "rgb(" + r + "," + g + "," + b + ")"; 
    principal.innerHTML = thergb;
	principal.style.backgroundColor=thergb;
}