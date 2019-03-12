# Oefeningen Hoofdstuk 04 - Function programming met Arrays

## Oefening 1: Caesarcijfer

Deel 1
Het Caesarcijfer is een klassieke manier om tekstberichten te coderen (versleutelen) en te decoderen
(ontsleutelen). Het is vernoemd naar Julius Caesar, die het gebruikte om te communiceren met zijn
veldheren.

De versleuteling werkt door elke letter van het alfabet te vervangen door een letter die enkele plaatsen
verder in het alfabet voorkomt. Hierbij wordt een circulair alfabet beschouwd, wat betekent dat na de
letter Z opnieuw de letter A volgt. Vandaar dat ook de term rotatie of verschuiving gebruikt wordt voor
deze operatie. Bijvoorbeeld, bij een rotatie over drie posities wordt de letter B tijdens het versleutelen
vervangen door de letter E. Alle overige karakters (cijfers, leestekens, spaties, …) blijven ongewijzigd in de
gecodeerde tekst.


Het ontsleutelen van een tekst gebeurt door de omgekeerde bewerking uit te voeren. In dit geval wordt er
dus een rotatie of verschuiving naar links uitgevoerd, in plaats van naar rechts zoals bij de versleuteling.
Bijvoorbeeld, bij een rotatie over drie posities wordt de letter E tijdens het ontsleutelen vervangen door de
letter B.


Versleutel de tekst ‘Errare human est.’ met deze codering. Dit kan met 1 (lange) regel JavaScript.

Deel 2
Schrijf een functie camelize die een woord met - zoals een-voorbeeld-string omzet naar een camelcase
word, bijvoorbeeld eenVoorbeeldString

Bijvoorbeeld

```javascript
console.log(camelize('background-color')); // backgroundColor
console.log(camelize('list-style-image')); // listStyleImage
console.log(camelize('-webkit-transition')); // WebkitTransition
```

Deel 3
Schrijf een functie zijnBuren(woord1, woord2) die true retourneert wanneer 2 woorden buren zijn. 2
woorden zijn buren wanneer ze slechts 1 karakter van elkaar verschillen, bijvoorbeeld KOLDER en HOLDER
Maak vervolgens gebruik van deze functie om te controleren of in een array elke 2 opeenvolgende
woorden buren zijn van elkaar

Deel 4
In morsecode wordt elk karakter van een woord vertaald naar een unieke opeenvolging van punten (.) en
streepjes (-), en worden de vertalingen van de individuele karakters telkens van elkaar gescheiden door één
enkele spatie.

Zet de gegeven tekst om in morsecode.


## Oefening 2: Snake

## Oefening 3: Doolhof

