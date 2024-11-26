const user = JSON.parse(localStorage.getItem("login_success")) || false
if(!user){
    windows.location.href = "./login.html"
}

const logout = document.querySelector("#logout")
const home = docuem.querySelector("#home")
console.log(home)
home.addEventListener("click", ()=>{
    alert("Gracias por ser parte de nosotros!")
    window.location.href="../index.html"
} )

logout.addEventListener("click", ()=>{
    alert("Hasta Pronto")
    localStorage.removeItem("login_success")
    window.location.href="./login.html"
})
