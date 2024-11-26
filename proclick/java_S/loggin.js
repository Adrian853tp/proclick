const loginForm = document.querySelector("#loginform")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    // captura de valores de documento
    const email = document.querySelector("#email").value 
    const password = document.querySelector("#password").value

    // traemos la BD del storage
    const Users = JSON.parse(localStorage.getItem("users")) || []

    // validacion de los datos traidos del storage
    const validUser =Users.find(user => user.email === email && user.password ===password)
    
    // la negacion de validUser nos dice que esta mal colocado los datos anteriores o no esta registrado
    if(!validUser){
        return alert("Usuario y/o contraseña incorrectos!")
    }
    alert (`Bienvenido ${validUser.name}`)
        // parte de seguridad para que sino esta logueado no pueda acceder al index
    localStorage.setItem("login_success", JSON.stringify(validUser))
    window.location.href="../index.html"
})