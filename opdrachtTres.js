//Opdracht 3 - Array methoden en functies


// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
// pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
// dubbele namen in zitten, is niet erg.

// maak HTML element in index file
// haal element naar js file (DOM)
// loop door array
// voor elke iteratie een list element
// stop in element de tv namen
// voeg resultaat toe aan container

const megaList = document.getElementById("list")

const listTitle = document.createElement("h3")
listTitle.textContent = "Brand Names Available"

megaList.appendChild(listTitle);

inventory.map((listTv) => {
    const newList = document.createElement("li")
    newList.textContent = listTv.brand;

    return megaList.appendChild(newList);
})


// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
// onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
// - declaratie niet aan te roepen!

// maak function
// schrijf logica van 3a in function
// roep function aan buiten scope


function banaan(array){
    const megaList = document.getElementById("list")

    array.map((listTv) => {
        const newList = document.createElement("li")
        newList.textContent = listTv.brand;

        return megaList.appendChild(newList);
    })
}

banaan(inventory);

// nu is het wel dubbel op de pagina, maar 3a kan dus in principe uitgecomment



