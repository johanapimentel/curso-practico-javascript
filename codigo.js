var resultadoAreaTriangulo = document.getElementById("resultadoAreaTriangulo");

document.getElementById("btnCuadrado").addEventListener("click",calcularCuadrado);

function calcularCuadrado() {
    var lado = document.getElementById("ladoCuadradoHtml");
    var resultadoArea = document.getElementById("resultadoAreaCuadrado");
    var resultadoPerimetro = document.getElementById("resultadoPerimetroCuadrado");
    var alerta = document.getElementById("alertaCuadrado");
    if (lado.value > 0){
        var area = lado.value * lado.value;
        var perimetro = lado.value * 4;
        alerta.innerHTML = "";
        resultadoArea.innerHTML = area + " cm2";
        resultadoPerimetro.innerHTML = perimetro + " cm";
    } else 
    {
        alerta.innerHTML = "* No puede ser un numero negativo ni dejar espacio en blanco";
    }
}

document.getElementById("btnTriangulo").addEventListener("click",calcularTriangulo);

function calcularTriangulo() {
    var base = document.getElementById("baseTrianguloHtml");
    var altura = document.getElementById("alturaTrianguloHtml");
    var resultadoArea = document.getElementById("resultadoAreaTriangulo");
    var alerta = document.getElementById("alertaTriangulo");
    if ((base.value > 0) && (altura.value > 0)){
        var area = (base.value * altura.value)/2;
        alerta.innerHTML = "";
        resultadoArea.innerHTML = area + " cm2";
    } else 
    {
        alerta.innerHTML = "* No puede ser un numero negativo ni dejar espacio en blanco";
    }
}

document.getElementById("btnPTriangulo").addEventListener("click",calcularPTriangulo);

function calcularPTriangulo() {
    var base = document.getElementById("basePTrianguloHtml");
    var lado1 = document.getElementById("ladoIzqTrianguloHtml");
    var lado2 = document.getElementById("ladoDerTrianguloHtml");
    var resultadoPerimetro = document.getElementById("resultadoPerimetroTriangulo");
    var alerta = document.getElementById("alertaPTriangulo");
    if ((base.value > 0) && (lado1.value > 0) && (lado2.value > 0)){
        var perimetro = parseInt(base.value) + parseInt(lado1.value) + parseInt(lado2.value);
        alerta.innerHTML = "";
        resultadoPerimetro.innerHTML = perimetro + " cm";
    } else 
    {
        alerta.innerHTML = "* No puede ser un numero negativo ni dejar espacio en blanco";
    }
}

document.getElementById("btnCirculo").addEventListener("click",calcularCirculo);

function calcularCirculo() {
    var radio = document.getElementById("radioCirculoHtml");
    var resultadoArea = document.getElementById("resultadoAreaCirculo");
    var resultadoPerimetro = document.getElementById("resultadoPerimetroCirculo");
    var alerta = document.getElementById("alertaCirculo");
    if (radio.value > 0){
        var area = ((radio.value * radio.value) * Math.PI).toFixed(2);
        var perimetro = (2 * Math.PI * radio.value).toFixed(2);
        alerta.innerHTML = "";
        resultadoArea.innerHTML = area + " cm2";
        resultadoPerimetro.innerHTML = perimetro + " cm";
    } else 
    {
        alerta.innerHTML = "* No puede ser un numero negativo ni dejar espacio en blanco";
    }
}