/** We gaan er vanuit dat de slang altijd uit minstens 3 vierkanten bestaat, anders moeten we nog een paar testen toevoegen
 * Er wordt ook gewerkt met veelvouden van 10 voor de posities
 * **/
class Vierkant {
}

class Slang {
}

class Spel {
  constructor(zijdeCanvas) {
  }


  initialiseer() {
  }

  richtingSlangInstellen(dx, dy) {
  }

  speel() {
  }

  checkKopSlangOpDoel() {
  }

  verplaatsSlang() {
  }
}

class SpelComponent {
  constructor(window) {
    this._window = window;
    this._cv = document.getElementById('gameCanvas');
    this._ctx = this._cv.getContext('2d');
    this._spel = new Spel(this._cv.width);
    this.tekenSpel();
  }

  get spel() {
    return this._spel;
  }

  tekenSpel() {
    // Maak achtergrond leeg
    // Teken Doel
    // Teken slang
  }

  speelSpel() {
    this._spel.speel();
    this.tekenSpel();
  }
}

function init() {
  const spelComponent = new SpelComponent(this);
  document.onkeydown = function(event) {
    // pijltjestoets naar links
    if (event.keyCode === 37) {
      spelComponent.spel.richtingSlangInstellen(-10, 0);
    } else if (event.keyCode === 38) {
      // pijltjestoets naar boven
      spelComponent.spel.richtingSlangInstellen(0, -10);
    } else if (event.keyCode === 39) {
      // pijltjestoets naar rechts
      spelComponent.spel.richtingSlangInstellen(10, 0);
    } else if (event.keyCode === 40) {
      // pijltjestoets naar beneden
      spelComponent.spel.richtingSlangInstellen(0, 10);
    }
    spelComponent.speelSpel();
  };

  // Als je wil dat de slang vanzelf beweegt, kan je het 
  // volgende stukje uit commentaar zetten
  // In essentie wil dit zeggen dat de functie speelSpel 
  // iedere 200 ms uitgevoerd wordt
  /*
  setInterval(function() {
    spelComponent.speelSpel();
  }, 200);
  */
}

window.onload = init;
