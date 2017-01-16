function validateForm() {
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var correo = document.getElementById("input-email").value;
var contra =document.getElementById("input-password").value;
var salida =document.getElementById("salida").value;

if (nombre ===""||apellido===""||correo===""||contra===""){
    alert("Todos los campos son obligatorios");
    return false;
}else if (!/^[a-zA-Z]*$/.test(nombre)){
    salida.innerHTML="Coloca tu nombre con letras,evita los numeros";
}else if (!nombre.charAt(0)!=nombre.charAt(0).toUpperCase()){
    salida0.innerHTML="Coloca la primera letra en mayuscula";
}else if (!/^[a-zA-Z]*$/.test(apellido)){
    salida1.innerHTML="Coloca tu nombre con letras,evita los numeros";
}else if (!apellido.charAt(0)!=apellido.charAt(0).toUpperCase()){
    salidas1.innerHTML="Coloca la primera letra en mayuscula";
}else if (!/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(correo)){
    salida2.innerHTML="Coloca correctamente tu contrasena";
}
else if(contra.length>6){
   salida3.innerHTML="Minimo 6 caracteres";
}

}
