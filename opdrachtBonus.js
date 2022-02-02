// Bonusopdracht

// 1. Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
// die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
// dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op
// de bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!

// knop 1: `Uitverkochte exemplaren`
// knop 2: `AmbiLight TV's`
// knop 3: `Sorteer op prijs`

// document.addEventListener("DOMContentLoaded",function() {
//     const button
// })

const buttons = document.getElementById("buttons");

const buttonUno = document.createElement("button");
buttonUno.textContent = "Uitverkochte exemplaren"
buttonUno.addEventListener("click", uitverkochteExemplaren) // getting an error when clicking, nog sure why

const buttonDos = document.createElement("button");
buttonDos.textContent = "AmbiLight TV's"

const buttonTres = document.createElement("button");
buttonTres.textContent = "Sorteer op prijs"

buttons.appendChild(buttonUno);
buttons.appendChild(buttonDos);
buttons.appendChild(buttonTres);

// 1b:
function uitverkochteExemplaren(inventory) {
    const soldOutTvs = inventory.filter((inventory) => {
        return inventory.originalStock === inventory.sold;
    });
    console.log(soldOutTvs);
}

uitverkochteExemplaren(inventory);



// 2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
// jouw `generateTV`-functie zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

