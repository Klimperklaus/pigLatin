/*

Pig-Latein-Übersetzung.
Erstell  eine Funktion, die eine Folge von Wörtern übernimmt, den ersten Buchstab jedes Wortes an das Ende verschiebt und dann „ay“ 
am Ende des Wortes hinzufügt. Dies ist eine Grundform des „pigLatin“.
Verschieb den ersten Buchstab jedes Wortes an das Ende des Wortes.
Füg „ay“ am Ende des Wortes hinzu.
Wörter, die mit einem Vokal beginnen (A, E, I, O, U), häng stattdessen „way“ an das Ende.
Zusätzliche Übung
Behalt die richtige Groß- und Kleinschreibung bei, wie in den Beispielen unten.
Beispiele:
pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”aufregende Geschichte erzählt.“) ➞ 
„Ehay oldtay usway weg eryvay aufregendway aletay.“ 

*/

const rl = require("readline-sync");

const userInput = rl.question("Type in your text: ");

function pigLatin(string) {
  const arr = string.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  const createPigLatin = arr.map((element) => {
    const firstLetter = element[0];
    const restOfWord = element.slice(1);
    return (
      restOfWord + firstLetter + (!vowels.includes(firstLetter) ? "ay" : "way")
    );
  });
  return createPigLatin.join(" ");
}

console.log(pigLatin(userInput));
