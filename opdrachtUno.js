// Opdracht 1 - Array Methoden

// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const allTvTypes = inventory.map((inventory) => {
    return inventory.type;
});
console.log(allTvTypes);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// Log de uitkomst in de console.

const soldOutTvs = inventory.filter((inventory) => {
    return inventory.originalStock === inventory.sold;
});

console.log(soldOutTvs);


// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// Log de uitkomst in de console.

const ambiLightTv = inventory.filter((ambiLight) => {
    return ambiLight.options.ambiLight === true;
})
console.log(ambiLightTv);


// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

// loop
// voor elke iteratie prijs v laag n hoog sorteren
// sorteer tv met lagere prijs voor de hogere prijs tv
// log


function sortArray(banaan) {
    return banaan.sort((a,b) => {
        if (a.price - b.price > 0) {
            return 1;
        } else if (a.price - b.price < 0) {
            return -1;
        } else {
            return 0;
        }
    })
}

console.log(sortArray(inventory));

// korter (maar pas als je het snapt):
function sortArrayShort(tvs) {
    return tvs.sort((a,b) => a.price - b.price)
}
console.log(sortArrayShort(inventory));

