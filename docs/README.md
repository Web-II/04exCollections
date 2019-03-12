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

![caesar1.png](/docs/caesar1.png 'Versleuteling')


Het ontsleutelen van een tekst gebeurt door de omgekeerde bewerking uit te voeren. In dit geval wordt er
dus een rotatie of verschuiving naar links uitgevoerd, in plaats van naar rechts zoals bij de versleuteling.
Bijvoorbeeld, bij een rotatie over drie posities wordt de letter E tijdens het ontsleutelen vervangen door de
letter B.

![caesar2.png](/docs/caesar2.png 'Ontsleuteling')

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

In deze oefening gaan we een eenvoudige versie van Snake programmeren. De slang moet zo veel mogelijk rode doelen opeten. Als de slang een doel opeet, dan groeit de slang met 1 blauw vierkant achteraan. 
Bewegen gebeurt via de pijltjestoetsen.

![snake1.png](/docs/snake1.png 'eindresultaat')

* Het doel bestaat uit 1 rood vierkantje
* De slang bestaat uit minstens 3 vierkanten: de kop is een zwart vierkant, de rest zijn blauwe vierkanten
* Alle vierkanten hebben een zijde met lengte 10. Ook de verplaatsingen van de slang gebeuren met 10. We kunnen ons het canvas dus als hiernaast voorstellen. De horizontale en verticale zwarte lijnen worden in werkelijkheid wel niet getekend
* De slang beweegt als volgt. In de onderstaande schematische afbeeldingen bestaat de slang uit 1 zwarte kop en 5 blauwe stukken. Als de slang 1 beweging uitvoert
  * krijgt elk van de blauwe stukken de positie van het voorgaande stuk, te beginnen van vanachteren => stuk 5 krijgt de x- en y-coördinaat van stuk 4, stuk 4 krijgt de x- en y- coördinaat van stuk 3, …, stuk 1 krijgt de x- en y-coördinaat van de kop
  * krijgt het eerste stuk – de kop – de positie x + richtingX en y + richtingY (x en y zijn de huidige coördinaten, richtingX en richtingY zijn properties van Slang)
  * Stel aan de hand van de onderstaande figuren vast hoe stuk 5 altijd de coördinaten krijgt van stuk 4, stuk 4 krijgt de coördinaten van stuk 3, … De coördinaten van de kop tenslotte worden bepaald door de huidige coördinaten en door de waarde van de velden richtingX en richtingY uit de klasse Slang

![snake2.png](/docs/snake2.png 'Bewegen')

![snake3.png](/docs/snake3.png 'eindresultaat')

1. Schrijf een klasse Vierkant. Een Vierkant heeft een x – en een y – coördinaat voor de linkerbovenhoek en een kleur. Deze worden als parameters aan de constructor meegegeven. Een Vierkant heeft ook nog een zijde met als defaultwaarde 10. Voorzie getters en setters.
2. Schrijf een klasse Slang. Een Slang heeft een array van vierkanten, een dx en een dy. Voorzie getters en setters.
3. Schrijf een klasse Spel. Een Spel heeft de volgende properties
  * Een doel (= rood vierkant met linkerbovenhoek (0, 0))
  * Een slang
  * Een breedte van de zijde van het canvas
  * Een aantal doelen (die al werden opgegeten)
Voorzie getters en setters
4. Voorzie binnen de klasse Spel een methode initialiseer
  * Het doel komt in het midden van het canvas te staan
  * De slang krijgt 3 vierkanten en staat tussen de linkerrand en het doel
5. Roep de functie speel op binnen de constructor van de klasse Spel
6. Implementeer de methode tekenSpel binnen de klasse SpelComponent
  * De achtergrond wordt leeg gemaakt
  * Het doel wordt getekend
  * De slang wordt getekend
  * Het aantal opgegeten doelen wordt uitgeschreven in het element met id opgegetenDoelen.
7. Zorg dat de code werkt tot nu toe vooraleer verder te gaan.
8. Voorzie binnen de klasse Spel een methode richtingSlangInstellen waarmee de properties dx en dy van de slang ingesteld worden
9. Voorzie binnen de klasse Spel een methode speel waarmee er gecontroleerd wordt of de kop van de slang zich op het doel bevindt en de slang verplaatst wordt.
10. Voorzie binnen de klasse Spel een methode verplaatsSlang. De methode verplaatsSlang voert 1 beweging van de slang uit zoals hierboven reeds werd beschreven: elk stuk – te beginnen van vanachteren – krijgt de coördinaten van het vorige stuk. De coördinaten van de kop worden berekend rekening houdend met de richting (richtingX, richtingY) van de slang 

Als de slang de rand bereikt, gaat ze verder aan de andere rand. Dit wordt hieronder geïllustreerd. Dit geldt zowel voor horizontaal als voor verticaal.

![snake4.png](/docs/snake3.png 'eindresultaat')

11. Voorzie binnen de klasse Spel een methode checkKopSlangOpDoel 
  * Controleer of de kop van de slang samenvalt met het doel. 
  * Als dat zo is, wordt er achteraan de slang een nieuw blauw vierkant toegevoegd. De coördinaten van dit nieuwe vierkant zijn niet van belang omdat vervolgens toch verplaatsSlang wordt opgeroepen in de functie speel() 
  * Er worden nieuwe random coördinaten bepaald voor het doel 
  * Het aantal doelen wordt met 1 verhoogd 

## Oefening 3: Doolhof

In deze oefening gaan we het begin van een eenvoudig doolhof programmeren. Als op de pijltjestoets naar links / rechts / boven / onder geklikt wordt, wordt de groene cirkel met 10 naar links / rechts / boven / onder verplaatst. Het is de bedoeling om met zo weinig mogelijk kliks op de pijltjestoetsen de paarse cirkel te bereiken. Als een rode muur geraakt wordt, wordt de groene cirkel terug verplaatst naar het punt (15, 15). Ook de randen van het canvas fungeren als muur. 
Iedere keer de speler op de pijltjestoetsen klikt, wordt het aantalKliks verhoogd met 1. 
1. Schrijf een klasse Cirkel. Een Cirkel heeft een x – en een y – coördinaat voor het middelpunt, een straal en een kleur. Deze worden als parameters aan de constructor meegegeven. Voorzie getters en setters.
2. Schrijf een klasse Lijnstuk. Een Lijnstuk heeft een x1 – en een y1 – coördinaat voor het beginpunt en een x2 – en een y2 – coördinaat voor het eindpunt. Deze worden als parameters aan de constructor meegegeven. Voorzie getters en setters.

![doolhof1.png](/docs/doolhof1.png 'lijnstuk')

3. Bekijk de code voor de klasse Spel. 
  * In de methode berekenAfstand wordt de afstand tussen 2 punten (x_1,y_1 ) en (x_2,y_2) berekend. Daarvoor maken we gebruik van de volgende formule. Deze functie heeft 4 parameters x1 en y1 en x2 en y2.
  
![doolhof3.png](/docs/doolhof3.png 'formule')

  * De methode checkSnijpunten retourneert true als de groene cirkel het meegegeven lijnstuk raakt of snijdt. 
  * In de methode verplaatsSpeler wordt de opgegeven waarde dx bij de x- coördinaat en de opgegeven waarde dy bij de y – coördinaat opgeteld.
  * Vervolledig de methode checkGewonnen. Deze methode retourneert true als de afstand tussen het middelpunt van de groene cirkel en het middelpunt van de paarse cirkel kleiner is dan de straal van de groene cirkel + de straal van de paarse cirkel.
  * Vervolledig de code voor checkBotsingen. Deze methode controleert of de groene cirkel snijdt met 1 van alle rode lijnstukken. In dat geval worden de x – coördinaat en de y – coördinaat van het middelpunt van de groene cirkel beide terug op 15 gezet. De groene cirkel komt met andere woorden als ‘straf’ voor de botsing weer links bovenaan het canvas te staan
4. Bekijk de bestaande code voor de klasse SpelComponent. Wat zijn de properties van deze klasse?
5. Vul de code van de methode tekenCirkel aan waarbij de meegegeven cirkel getekend wordt
6. Vul de code van de methode tekenSegment aan waarbij het meegegeven segment getekend wordt
7. Vul de code van de methode tekenSpel aan
  * De achtergrond wordt leeg gemaakt
  * Alle lijnstukken worden getekend
  * De speler en het doel worden getekend
8. Vul de code van de methode speelSpel aan
  * Als het spel gespeeld wordt en er wordt true geretourneerd => Er verschijnt een alert ("Je hebt het doel bereikt") en het spel wordt opnieuw aangemaakt
  * Het spel wordt getekend

![doolhof2.png](/docs/doolhof2.png 'resultaat')



