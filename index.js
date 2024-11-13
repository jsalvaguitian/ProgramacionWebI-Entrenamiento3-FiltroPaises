const countries = [
    { name: "Argentina", abbreviation: "AR", continent: "América del Sur", flag: "🇦🇷", language: "Español" },
    { name: "Australia", abbreviation: "AU", continent: "Oceanía", flag: "🇦🇺", language: "Inglés" },
    { name: "Brasil", abbreviation: "BR", continent: "América del Sur", flag: "🇧🇷", language: "Portugués" },
    { name: "Canadá", abbreviation: "CA", continent: "América del Norte", flag: "🇨🇦", language: "Inglés, Francés" },
    { name: "China", abbreviation: "CN", continent: "Asia", flag: "🇨🇳", language: "Chino" },
    { name: "Colombia", abbreviation: "CO", continent: "América del Sur", flag: "🇨🇴", language: "Español" },
    { name: "Egipto", abbreviation: "EG", continent: "África", flag: "🇪🇬", language: "Árabe" },
    { name: "España", abbreviation: "ES", continent: "Europa", flag: "🇪🇸", language: "Español" },
    { name: "Francia", abbreviation: "FR", continent: "Europa", flag: "🇫🇷", language: "Francés" },
    { name: "Alemania", abbreviation: "DE", continent: "Europa", flag: "🇩🇪", language: "Alemán" },
    { name: "India", abbreviation: "IN", continent: "Asia", flag: "🇮🇳", language: "Hindi, Inglés" },
    { name: "Indonesia", abbreviation: "ID", continent: "Asia", flag: "🇮🇩", language: "Indonesio" },
    { name: "Irlanda", abbreviation: "IE", continent: "Europa", flag: "🇮🇪", language: "Inglés, Irlandés" },
    { name: "Italia", abbreviation: "IT", continent: "Europa", flag: "🇮🇹", language: "Italiano" },
    { name: "Japón", abbreviation: "JP", continent: "Asia", flag: "🇯🇵", language: "Japonés" },
    { name: "Kenia", abbreviation: "KE", continent: "África", flag: "🇰🇪", language: "Inglés, Suajili" },
    { name: "México", abbreviation: "MX", continent: "América del Norte", flag: "🇲🇽", language: "Español" },
    { name: "Marruecos", abbreviation: "MA", continent: "África", flag: "🇲🇦", language: "Árabe, Bereber" },
    { name: "Nueva Zelanda", abbreviation: "NZ", continent: "Oceanía", flag: "🇳🇿", language: "Inglés, Maorí" },
    { name: "Nigeria", abbreviation: "NG", continent: "África", flag: "🇳🇬", language: "Inglés" },
    { name: "Noruega", abbreviation: "NO", continent: "Europa", flag: "🇳🇴", language: "Noruego" },
    { name: "Pakistán", abbreviation: "PK", continent: "Asia", flag: "🇵🇰", language: "Urdu, Inglés" },
    { name: "Perú", abbreviation: "PE", continent: "América del Sur", flag: "🇵🇪", language: "Español" },
    { name: "Filipinas", abbreviation: "PH", continent: "Asia", flag: "🇵🇭", language: "Filipino, Inglés" },
    ];

let tablaMain = document.querySelector(".tabla-paises");

for(let i =0; i < countries.length; i++){
    let sectionCelda = document.createElement("section");//creo los section como celda
    sectionCelda.className = "js-celda";//

    sectionCelda.innerHTML = `<p class="nombre">${countries[i].name}</p><p>${countries[i].flag}</p>`;

    tablaMain.appendChild(sectionCelda);

}

let celdas = document.querySelectorAll(".js-celda");// tener lo que voy a filtrar (esto supongo)
let modal = document.querySelector(".modal");
let btnCerrarModal = document.querySelector(".close");
let descriptionDiv = document.querySelector(".description-country");
let inputBuscador = document.getElementById("buscador-pais");//tener el input

celdas.forEach((celda,index) =>{
    celda.addEventListener("click", ()=>{
        fabricarModal(index);
        modal.showModal();  
    })
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})

//escucho lo que ingreso por teclado en input
inputBuscador.addEventListener("keyup", (event)=>{
    const valorIngresadoInput = inputBuscador.value.toLowerCase();

    celdas.forEach((celda)=>{
        const nombrePaisCelda = celda.querySelector(".nombre").textContent.toLowerCase();

        if(nombrePaisCelda.includes(valorIngresadoInput)){
            celda.style.display = "block";
        }else{
            celda.style.display = "none";
        }
    })
})


/////////////////////////////////////////////////////
//FUNCIONES
function fabricarModal(index){
    descriptionDiv.innerHTML= `<p>Name: ${countries[index].name}</p>
        <p>Abreviation: ${countries[index].abbreviation} </p>
        <p>Continent: ${countries[index].continent} </p>
        <p>Flag: ${countries[index].flag}</p>
        <p>Language: ${countries[index].language}</p>`;

}







