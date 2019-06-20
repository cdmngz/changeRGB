document.getElementsByTagName("input")[0].oninput = function() {
    //Obtiene valor de inputRange No1 y lo inserta en span No1
    document.getElementsByTagName("span")[0].innerHTML = this.value;
    colorear();
}

document.getElementsByTagName("input")[1].oninput = function() {
    //Obtiene valor de inputRange No2 y lo inserta en span No2
    document.getElementsByTagName("span")[1].innerHTML = this.value;
    colorear();
}

document.getElementsByTagName("input")[2].oninput = function() {
    //Obtiene valor de inputRange No3 y lo inserta en span No3
    document.getElementsByTagName("span")[2].innerHTML = this.value;
    colorear();
}

function colorear(){
    //Obtiene texto de la etiqueta A
    var textoEnEtiquetaA = document.getElementsByTagName("a")[0].textContent;
    //Asigna el texto de la etiqueta A en el style del div principal
    document.getElementById("principal").style.backgroundColor = textoEnEtiquetaA;
}