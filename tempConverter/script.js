
function toFah(){
    var degc= +box1.value
    var fah=(degc*(9/5)+32);
    document.getElementById("box2").value=fah;
}

function toCel(){

    var degf=+box1.value

    var cel=(degf-32)*(5/9);
    document.getElementById("box2").value=cel;
}