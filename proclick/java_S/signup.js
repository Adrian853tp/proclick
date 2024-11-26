const signupform = document.querySelector("#signupForm")
signupform-addEventListener("submit" , (e)=>{
    e.preventDefault()

    // captura de datos desde docu
    const name = document.querySelector("#nombreComp").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    // comprobacion en localstorage si el mail ya esta registrado

    const Users = JSON.parse(localStorage.getItem("users")) || []
    const isUserRegistred = Users.find(user => user.email === email)
    if (isUserRegistred){
        return alert("El ususario ya esta registrado...")
    }
    // el push coloca un objeto completo en el array localstorage
      Users.push({name: name, email: email, password: password}) 
    localStorage.setItem("users", JSON.stringify(Users))
    alert("Registro Exitoso!")
    window.location.href = "../proclick/login.html"
})


