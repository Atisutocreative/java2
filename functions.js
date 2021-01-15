//* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23

function number(a, b, c) {
    return a + b + c;
}
const antwoord1 = number(3, 4, 5);
const antwoord2 = number(11, 3, 9);
console.log(antwoord1, antwoord2)

//function aaa = (d, e, f) => {
//    return d + e + f;
//}

//aaa(3, 4, 5);

//console.log(aaa)

/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"

function name(gg, hh) {
    return gg + hh;
}
name1 = name('abra', 'cababra');
console.log(name1)

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function tekst(woord, karakter) {
    return karakter + woord + karakter
}
const tekst1= tekst('bril', '*')
const tekst2= tekst('beep', '_')
const tekst3= tekst('kaas', 'Q')
console.log(tekst1, tekst2, tekst3)


/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

function all(aaaa) {
    let uitslag = "";
    for (let i = 0; i < aaaa.length; i++) {
        uitslag = uitslag + aaaa[i];
    }
    return uitslag;
}
spreuk =all(['abra','cadabra','abracadabra'])
spreuk2 =all(['a','b','c','d'])
console.log(spreuk, spreuk2)

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

function groet(tekst) {
    let groet = "Hoi ";

    for (let i = 0; i < tekst.length; i++) {
        // als dit de laatste entry is, voeg dan het uitroepteken toe
        if (i === tekst.length - 1) {
            // de return zorgt ervoor dat er niet meer naar de andere if-statements gekeken wordt
            return groet = groet + " en " + tekst[i] + "!";
        }
        // als de array maar twee namen bevat of we zijn bij de één-na-laatste naam, voeg dan alleen de naam toe
        if (tekst.length === 2 || i === tekst.length - 2) {
            groet = groet + tekst[i];
        } else {
            // in andere alle gevallen voegen we een komma en spatie toe
            groet = groet + tekst[i] + ", ";
        }
    }

    return groet;
}

aa =groet(["Piet", "Henk"]);
bb =groet(["A", "B", "C", "D", "E", "F"]);
cc =groet(["Nova", "Mitchel", "Arjen"]);
console.log(cc, aa, bb)