const barras = document.getElementsByTagName("input")

for(const item of barras) {
    item.oninput = function() {
        document.getElementsByTagName("span")[this.id].innerText = this.value
        let textA = document.getElementsByTagName("a")[0].textContent;
        textA = (textA.replace(/ /g,'')).toLocaleLowerCase();
        document.getElementById("principal").style.backgroundColor = textA;
    }
}