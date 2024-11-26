const Products = [
 {
    id:1,
    name: "Perez Francisco",
    actividad: "Arquitecto",
    consulta:"visita- $40.000.-",
    Te:2996057555,
    mail: "electroperez@gmail.com",
    vive: "Cipolletti",
    Image:"https://img2.freepnges.com/20180323/pww/kisspng-computer-icons-clip-art-profile-cliparts-free-5ab5a47b02ff75.0880050915218535630123.jpg",
    ranking: "***",
 },
 {
    id:2,
    name: "Rodriguez Juan",
    actividad: "Metalurgico",
    consulta:"visita- $35.000.-",
    Te:2996665577,
    mail: "rodri234@gmail.com",
    vive: "Cipolletti",
    Image:"https://img2.freepnges.com/20180323/pww/kisspng-computer-icons-clip-art-profile-cliparts-free-5ab5a47b02ff75.0880050915218535630123.jpg",
    ranking: "*****",
 },
 {
    id:3,
    name: "Rivera Jorge",
    actividad: "Electricista",
    consulta:"visita- $30.000.-",
    Te:113456786778,
    mail: "electroperez@gmail.com",
    vive: "Cipolletti",
    Image:"https://img2.freepnges.com/20180323/pww/kisspng-computer-icons-clip-art-profile-cliparts-free-5ab5a47b02ff75.0880050915218535630123.jpg",
    ranking: "**",

 },
 {
   id:4,
   name: "Delaolla Oscar",
   actividad: "Albañil",
   consulta:"Consultar",
   Te:2996057435,
   mail: "Delaolla@gmail.com",
   vive: "Fernandez Oro",
   Image:"https://img2.freepnges.com/20180323/pww/kisspng-computer-icons-clip-art-profile-cliparts-free-5ab5a47b02ff75.0880050915218535630123.jpg",
   ranking: "*****",
},
{
   id:5,
   name: "Juarez Pepito",
   actividad: "Instalador",
   consulta:"Preguntar",
   Te:2996665577,
   mail: "pepe666@gmail.com",
   vive: "Allen",
   Image:"https://img2.freepnges.com/20180323/pww/kisspng-computer-icons-clip-art-profile-cliparts-free-5ab5a47b02ff75.0880050915218535630123.jpg",
   ranking: "**",
},
{
   id:6,
   name: "Bartolo Josefo",
   actividad: "Carpintero",
   consulta:"Consultar",
   Te:113456786778,
   mail: "carpinteriajosefo@gmail.com",
   vive: "Neuquén",
   Image:"https://img2.freepnges.com/20180323/pww/kisspng-computer-icons-clip-art-profile-cliparts-free-5ab5a47b02ff75.0880050915218535630123.jpg",
   ranking: "*****",
   

},
]


const root = document.querySelector("#root");

const loadEvents = () =>
{
   const buttons = document.querySelectorAll(".button")
   for (const button of buttons)
   {
      button.addEventListener("click", ()=> {
         const selectedProduct = Products.find(product => product.id === Number(button.id))
         if(selectedProduct){
            alert(`A seleccionado un: ${selectedProduct.actividad}`)
         }
      })
   }
}

const createProducts = () =>
   {
      Products.forEach(product =>{
         const card = document.createElement("div")
         card.id = "cards";
         card.innerHTML = `
            <img src ='${product.Image}'alt='${product.actividad}'>
            <h3> Nomb/Emp: ${product.name}</h3>
            <h4> Rub: ${product.actividad}</h4>
            <h3> ${product.consulta}</h3>
            <h4> Vive en: ${product.vive}
            <br><br>
            <h4> Telefono: ${product.Te}</h4>
             <br><br>
            <h4 id="color"> Valoración: ${product.ranking}</h4>
            <button id='${product.id}' class='button'>Seleccionar</button>
         `
         root.appendChild(card)
      })
      loadEvents()
   }

   createProducts()

