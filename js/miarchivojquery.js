

$(document).ready(function(){

     //ocultamos por defecto
     $(".calculadora").hide();

     //función para mostrar u ocultar la calculadora
     $("#imagenCalculadora").click(function(){

        if ($(".calculadora").is(":visible")){

          $(".calculadora").hide();
        }else{
            $(".calculadora").show();
            $(".botonesOperadores").hide();
            $("#botonIgual").hide();
            $( "#entrada" ).focus();

        }  

     });

});//fin de lectura documento




//funciones para calcular numeros

//Declaramos las variables
var num1 = 0;
var num2 = 0;
var opera;
var numero=0;
         

//Función para eventos de click
function Click(numero){
       
       if(num1==0 && num1 !== '0.'){
             num1 = numero;
             $(".botonesOperadores").show();
            
       }else{
             num1 += numero;
       }
       mostrar();
       $( "#entrada").focus();
}

//funcion para el teclado numerico
function operarTeclas(){
    var teclas = event.keyCode || event.charCode;  
     switch (teclas){

         case 48:
                Click('0');
                break;
         case 49:
                Click('1');
                break;
         case 50:
                Click('2');
                break;
         case 51:
                Click('3');
                break;
         case 52:
                Click('4');
                break;
         case 53:
                Click('5');
                break;
         case 54:
                Click('6');
                break;
         case 55:
                Click('7');
                break;
         case 56:
                Click('8');
                break;
         case 57:
                Click('9');              
                break;
         case 42:
                Operar(3);
                break;       
         case 43:
                Operar(1);       
                break;
         case 45:
                Operar(2);
                break;
         case 47:     
                Operar(4);
                break; 
         case 61:
                esIgual();       

     }            

}

 //lo mostramos en el display
function mostrar(){

    document.getElementById("entrada").value = num1;
}

 
 //función que realiza las distintas operaciones aritméticas en función del botón pulsado
function Operar(valor){

    $("#botonIgual").show();
    if (num1 == 0){
         num1 = parseFloat(document.getElementById("entrada").value);
    }
         num2 = parseFloat(num1);
         num1= 0;
         opera = valor;
         $( "#entrada").focus();
}

//boton igual switch case
function esIgual(){
    
    num1 = parseFloat(num1);
    switch (opera){
         case 1:
                num1 += num2;
                break;
         case 2:
                num1 = num2 - num1;
                break;
         case 3:
                num1 *= num2;
                break;
         case 4:
                num1 = num2 / num1;
                break;
         case 5:
                num1 = Math.pow(num2, num1);
                break;
    }
    $( "#entrada").focus();
    mostrar();
    num2 = parseFloat(num1);
    num1 = 0;
}


//limpiar pantalla
function Limpiar(){
     num1 = 0;
     num2 = 0;
     numero=0;
     opera=0;
     document.getElementById("entrada").value="";
     $( "#entrada").focus();
     $(".botonesOperadores").hide();
     $("#botonIgual").hide();

   
}


