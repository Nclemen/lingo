var woord =words[randomWoord(words)]
var antwoord;
var kopiewoordSpl= [];
var row     = 1;
var spelbord = document.getElementById('spelbord');
var letters = document.getElementsByClassName('letters');

pagina();
function pagina() {
 var spelbord = document.createElement("div");
 spelbord.setAttribute("id","spelbord");
 spelbord.style.margin = "0 auto";
 spelbord.style.width = "600px";
 spelbord.style.backgroundColor = "grey";
 spelbord.style.display = "grid";
 spelbord.style.gridTemplateColumns = "auto auto auto auto auto";
 spelbord.style.grisTemplateRows = "auto auto auto auto auto";
 spelbord.style.gridGap = "5px";
 spelbord.style.fontSize = "50px";
 spelbord.style.border = "5px";
 spelbord.style.borderColor = "grey";
 spelbord.style.borderStyle = "solid";
 for (var r = 1; r <=5 ; r++) {
   for (var i = 1; i <=5 ; i++) {
   var nieuwDIV = document.createElement("div");
   nieuwDIV.setAttribute("class","letters");
   nieuwDIV.setAttribute("id","letter"+i+"row"+r);
   nieuwDIV.innerHTML = "_";
   spelbord.appendChild(nieuwDIV);
  }
 }
 document.body.appendChild(spelbord);
}

function randomWoord(items){
return [Math.floor(Math.random()*items.length)];
}

function newWoord() {
  woord = words[randomWoord(words)];
  console.log(woord);
}

function kopieer() {
  var randomwoord = woord.split("");
  for (var i = 0; i < randomwoord.length; i++) {
    kopiewoordSpl[i] = randomwoord[i];
  }
}

kopieer();
document.getElementById('opnieuw').style.display = "none";
console.log(woord);

var mainDIV   = document.getElementById('mainDIV');
var inputDIV  = document.getElementById('inputDIV');
var word      = document.getElementById('word');
var theLetter = document.getElementById('raad');

function check() {
  var splword = woord.split("");
  var splraad = theLetter.value.split("");

  if (theLetter === woord) {
    return gewonnen = true;
  } else {
  for (var i = 0; i < splword.length; i++) {
    var letter    = document.getElementById('letter'+(i+1)+"row"+row)
    letter.innerHTML = splraad[i];
    if (splword[i] === splraad[i]) {
      kopiewoordSpl[i] = "#";
      if (row != 5) {
        document.getElementById('letter'+(i+1)+"row"+(row+1)).innerHTML = splraad[i];
        document.getElementById('letter'+(i+1)+"row"+(row+1)).style.backgroundColor = "red";
        document.getElementById('letter'+(i+1)+"row"+(row+1)).style.borderRadius = "0px";
      }
    } else if (splword[i] != splraad[i]) {
      kopiewoordSpl[i] = splword[i];
    }
}
checkG();
}
}

function checkG() {
  var splword = woord.split("");
  var splraad = theLetter.value.split("");

  antwoord = kopiewoordSpl[0]+kopiewoordSpl[1]+kopiewoordSpl[2]+kopiewoordSpl[3]+kopiewoordSpl[4];

  for (var i = 0; i < kopiewoordSpl.length; i++) {
    var letter    = document.getElementById('letter'+(i+1)+"row"+row);
    if (kopiewoordSpl[i] === "#") {
      letter.style.backgroundColor = "red";
      letter.style.borderRadius = "0px";
    } else if (antwoord.includes(splraad[i])) {
      letter.style.backgroundColor = "yellow";
      letter.style.borderRadius = "25px";
    }
  }
  theLetter.value = "";
  rowCheck();
}

function rowCheck() {
  if (row === 5) {
    alert("de ronde is voorbij");
    document.getElementById('opnieuw').style.display = "";
  } else {

    row++;
  }
}

function opnieuw() {
  newWoord();
  kopieer();
  row = 1;
  for (var r = 1; r <=5 ; r++) {
    for (var i = 1; i <=5 ; i++) {
    var letter    = document.getElementById('letter'+(i)+"row"+r)
    letter.innerHTML = "_";
    letter.style.backgroundColor = "blue";
    letter.style.borderRadius = "0px";
   }
  }
  document.getElementById('opnieuw').style.display = "none";
}
