var woordDIV  = document.getElementById('woordDIV');
var gameDiv = document.createElement("div");
var woord =words[randomWoord(words)]
var antwoord = [];
var row     = 1;
var rowbegin = 1

///////////////////////////////////////////////////////


var spelbord = document.getElementById('spelbord');
var letters = document.getElementsByClassName('letters');
var getal = 1;

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



function wordSelect() {
  var word = words[math.floor(math.random()*word.length)].toUpperCase();
  document.write(word);
}
function randomWoord(items)
{
return [Math.floor(Math.random()*items.length)];
}
function newWoord() {
  woord = words[randomWoord(words)];
}
gameDiv.setAttribute("id","gameDiv");
console.log(woord)



var mainDIV   = document.getElementById('mainDIV');
var inputDIV  = document.getElementById('inputDIV');
var word      = document.getElementById('word');
var theLetter = document.getElementById('raad');




function check() {
  var splword = woord.split("");
  var splraad = theLetter.value.split("");
  var check   = woord.includes(splraad[i]);

  if (theLetter === woord) {
    return gewonnen = true;
  }
  else {
  for (var i = 0; i < splword.length; i++) {
    var letter    = document.getElementById('letter'+(i+1)+"row"+row)
    letter.innerHTML = splraad[i];
    if (splword[i] === splraad[i]) {
      letter.style.backgroundColor = "red";
      letter.style.borderRadius = "0px";
    } else if (splword[i] != splraad[i]) {
      if (woord.includes(splraad[i])) {
        letter.style.borderRadius = "50px";
        letter.style.backgroundColor = "yellow";
      }else {
        letter.style.backgroundColor = "blue";
        letter.style.borderRadius = "0px";
      }
    }
}
}
row++;
}
