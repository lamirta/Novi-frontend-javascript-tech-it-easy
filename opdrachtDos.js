// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string,
// gebruik je hier gewoon een oude vertrouwde for-loop voor!

//     Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// iets om de waarde in op te slaan
// loop door array
// tel elke sold tv bij elkaar op
// log
// TIP: fori + tab = for loop shortcut!!

let result = 0

for (let i = 0; i < inventory.length; i++) {
    result = result + inventory[i].sold;
}
console.log(result);


// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// element maken in html om result in te storen / container
// haal dat element naar je js file via DOM
// maak  in je js file nieuwe elementen om waarde in op te slaan
// koppel aan (aangemaakte) container
// geef styling (green)

const soldTvs = document.getElementById("container");

const soldTvsTitle = document.createElement("h3");
soldTvsTitle.textContent = "Aantal verkochte tv's";

const allSoldTvs = document.createElement("h4")
allSoldTvs.textContent = result;
allSoldTvs.setAttribute("id", "result-color") // ook een manie rom specifiek result een kleur te geven.

soldTvs.appendChild(soldTvsTitle);
soldTvs.appendChild(allSoldTvs);


//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// same as 2a

let output = 0

for (let i = 0; i < inventory.length; i++) {
    output = output + inventory[i].originalStock;
}

console.log(output)

//     Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// same as 2c

const containerDos = document.getElementById("containerDos");

const tvsInStock = document.createElement("h3")
tvsInStock.textContent = "Aantal tv's";

const numTvsInStock = document.createElement("h4")
numTvsInStock.textContent = output;
numTvsInStock.setAttribute("id", "output-color")

containerDos.appendChild(tvsInStock);
containerDos.appendChild(numTvsInStock);


//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const containerTres = document.getElementById("containerTres")

const currentStock = document.createElement("h3")
currentStock.textContent = "Nog te verkopen TV's";

const currentStockNum = document.createElement("h4")
currentStockNum.textContent = `${output - result}`;
currentStockNum.setAttribute("id", "currentStock-color")

containerTres.appendChild(currentStock);
containerTres.appendChild(currentStockNum);
