
function ouvir(){

    navigator.mediaDevices.getUserMedia({audio: true})
    catalogo = m15.soundClassifier("https://teachablemachine.withgoogle.com/models/UCRCugl_A/model.json", modelLoaded)
}
function modelLoaded(){
    catalogo.classify(resultado)
}

function resultado(erro,sons) {
if(erro){
    console.log(sons)

} else{
    console.log(sons);
    somIdentificado = sons[0].label;
    document.getElementById("som").innerHTML=somIdentificado;
    document.getElementById("chance").innerHTML=sons[0].confidence;
    document.getElementById("alien1").src= "aliens-01.png"

document.getElementById("alien2").src= "aliens-02.png"
document.getElementById("alien3").src= "aliens-03.png"
document.getElementById("alien4").src= "aliens-04.png"
if(somIdentificado == "palmas")
    document.getElementById("alien1").src= "aliens-01.gif"
else if(somIdentificado= "ioio")
    document.getElementById("alien2").src= "aliens-02.gif"
else if(somIdentificado== "controle")
    document.getElementById("alien3").src= "aliens-03.gif"
}
}
