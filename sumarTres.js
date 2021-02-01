let numero1;
let numero2;
let numero3;

let numero4;
let numero5;

let sumaDe3;

let sumaDe2;
let productoDe2;


$("#txtSuma").click(adicion);

function adicion (){
    
numero1 = Number($("#txtNum1").val());
numero2 = Number($("#txtNum2").val());
numero3 = Number($("#txtNum3").val());

sumaDe3 = numero1 + numero2 + numero3;

//$("#input").val(sumaDe3);--para que el resultado aparesca en un campo de texto tipo input--
$("#txtResultado").html(sumaDe3);

//alert(sumaDe3);
}


$("#txtproSuma").click(cuenta);

function cuenta(){

    numero4 = Number($("#txtNum4").val());
    numero5 = Number($("#txtNum5").val());

sumaDe2 = numero4 + numero5;
productoDe2 = numero4 * numero5;

$("#suma").html(sumaDe2);
$("#producto").html(productoDe2);







}