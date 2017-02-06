function validateForm(){
  validateName();
validateLastName();
validateEmail();
validatePassword();
validateSelector();  
}

//variables de respuesta
var apelladv = document.getElementById("apelladv");
var nombreadv = document.getElementById("nombreadv");
var emailadv = document.getElementById("emailadv");
var passadv = document.getElementById("passadv");
var optionadv = document.getElementById("optionadv");

//Mayusculas
function upperCaseName(_id){
    var element=document.getElementById(_id);
    element.value = element.value.charAt(0).toUpperCase() + element.value.slice(1); 
}

//validating name
function validateName(){
    var valName = document.getElementById("name").value;
    if (valName!= ""){
        upperCaseName("name"); 
        if(/([0-9]+)/.test(valName)){
        nombreadv.innerHTML="<span style='color:red; font-weight:bolder'>Solo se aceptan letras</span>";
        }else{
         nombreadv.innerHTML="<span style='color:blue; font-weight:bolder'>Nombre Valido</span>";}    
    }else{
        nombreadv.innerHTML="<span style='color:red; font-weight:bolder'>Complete el campo</span>";}
}
    
/*    if(!/^[a-zA-Z]*$/.test(valName)){
       nombreadv.innerHTML="<span style='color:red; font-weight:bolder'>Utiliza letras</span>";
   }else {
       if(nombre.toLowerCase()){
        document.getElementById("name").value=nombre.charAt(0).toUpperCase() + nombre.slice(1);
        nombreadv.innerHTML="<span style='color:blue; font-weight:bolder'>Nombre Valido</span>";
       }else{
        nombreadv.innerHTML="<span style='color:red; font-weight:bolder'>Complete el campo</span>";
       }
    }
}*/
//validating lastname
function validateLastName(){
    var valLastName = document.getElementById("lastname").value;
    if (valLastName!= ""){
        upperCaseName("lastname"); 
        if(/([0-9]+)/.test(valLastName)){
        apelladv.innerHTML="<span style='color:red; font-weight:bolder'>Solo se aceptan letras</span>";
        }else{
         apelladv.innerHTML="<span style='color:blue; font-weight:bolder'>Nombre Valido</span>";}    
    }else{
        apelladv.innerHTML="<span style='color:red; font-weight:bolder'>Complete el campo</span>";}
}
//validating email
function validateEmail(){
    var valEmail = document.getElementById("input-email").value;
    if(!/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(valEmail)){
    emailadv.innerHTML="<span style='color:red; font-weight:bolder'>Complete el campo: ejem@dom.com</span>";
    }else{
        emailadv.innerHTML="<span style='color:blue; font-weight:bolder'>Campo Valido</span>";
    }
}
//validating password
function validatePassword(){
    var valPassword = document.getElementById("input-password").value;
    if (valPassword.length<6){
    passadv.innerHTML="<span style='color:red; font-weight:bolder'>Utiliza mas de 6 caracteres</span>";
    }else {
        if(valPassword=="098754"||valPassword=="password"||valPassword=="123456"){
        passadv.innerHTML="<span style='color:red; font-weight:bolder'>No incluyas palabras como: password ó 123456 ó 098754</span>";
    }else{
        passadv.innerHTML="<span style='color:blue; font-weight:bolder'>Campo Valido</span>";
        }   
    }
}
//validating options about bycicles
function validateSelector(){
    var valOptions = document.getElementById("options");
    if( valOptions == null || valOptions == 0 ){
       optionadv.innerHTML="<span style='color:red; font-weight:bolder'>Elija su tipo de bici</span>";
    }else{
        optionadv.innerHTML="<span style='color:blue; font-weight:bolder'>Campo Valido</span>";
    }      
    
}    


























/*++++++++++++++++++++++++++++++++++++++++++++OTHER METHOD-BASIC++++++++++++++++++++++++++++++++++++++++*/
/*function validateForm(){
//declarando variables
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;  
var correo = document.getElementById("input-email").value;
var contra =document.getElementById("input-password").value;
var indice = document.getElementsByClassName("form-control")[4].value;

//variables de respuesta

var apelladv = document.getElementById("apelladv");
var emailadv = document.getElementById("emailadv");
var passadv = document.getElementById("passadv");
var optionadv = document.getElementById("optionadv");
var complete = document.getElementById("complete");
    
//desarrollando el formulario
if(nombre===""||apellido===""||correo===""||contra===""){
    complete.innerHTML="<span style='color:red; font-weight:bolder'>Complete el formulario</span>";
}else{
   complete.innerHTML="<span style='color:blue; font-weight:bolder'>El formulario se envia</span>";
}

//Validar el nombre
if(!/^[a-zA-Z]*$/.test(nombre)){
       nombreadv.innerHTML="<span style='color:red; font-weight:bolder'>Utiliza letras</span>";
   }else {
       if(nombre.toLowerCase()){
        document.getElementById("name").value=nombre.charAt(0).toUpperCase() + nombre.slice(1);
        nombreadv.innerHTML="<span style='color:blue; font-weight:bolder'>Nombre Valido</span>";
       }else{
        nombreadv.innerHTML="<span style='color:red; font-weight:bolder'>Complete el campo</span>";
       }
    }

//Validar el apellido
if(!/^[a-zA-Z]*$/.test(apellido)){
       apelladv.innerHTML="<span style='color:red; font-weight:bolder'>Utiliza letras</span>";
   }else {
       if(apellido.toLowerCase()){
        document.getElementById("lastname").value=apellido.charAt(0).toUpperCase() + apellido.slice(1);
        apelladv.innerHTML="<span style='color:blue; font-weight:bolder'>Nombre Valido</span>";
       }else{
        apelladv.innerHTML="<span style='color:red; font-weight:bolder'>Complete el campo</span>";
       }
    }

//Validar el Correo
if(!/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(correo)){
    emailadv.innerHTML="<span style='color:red; font-weight:bolder'>Complete el campo: ejem@dom.com</span>";
    }else{
        emailadv.innerHTML="<span style='color:blue; font-weight:bolder'>Campo Valido</span>";
    }
//Validar la contraseña
if (contra.length<6){
    passadv.innerHTML="<span style='color:red; font-weight:bolder'>Utiliza mas de 6 caracteres</span>";
}else {
    if(contra=="098754"||contra=="password"||contra=="123456"){
    passadv.innerHTML="<span style='color:red; font-weight:bolder'>No incluyas palabras como: password ó 123456 ó 098754</span>";
    }else{
        passadv.innerHTML="<span style='color:blue; font-weight:bolder'>Campo Valido</span>";
    }   
}
//Validar tipo de bici
if( indice == null || indice == 0 ){
       optionadv.innerHTML="<span style='color:red; font-weight:bolder'>Elija su tipo de bici</span>";
    }else{
        optionadv.innerHTML="<span style='color:blue; font-weight:bolder'>Campo Valido</span>";
    }      
    
}      
*/         



