import { datos } from "./datos.js";
import { Usuario } from "./usuarios.js";


document.getElementById("iniciaSesion").addEventListener("click",(e)=>{
    e.preventDefault()
    let username = document.getElementById("nombre_usuario");
    let password = document.getElementById("password");
    let msg = "Usuario y/o contraseña incorrectos"
    datos.forEach(
        usuario => {
        if(username.value === usuario.nombre_usuario){
            if(password.value === usuario.password){
                msg = username.value +" Iniciaste Sesión";
                console.log(usuario)
                localStorage.setItem("username",usuario.nombre_usuario);
                localStorage.setItem("contra",usuario.password);
                window.location.href = "./index.html"
                return
            }     
        }
    });
    alert(msg);
    username.value = "";
    password.value = "";
})

const username = localStorage.getItem("username");