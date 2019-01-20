var woordDIV  = document.getElementById('woordDIV');
var gameDiv = document.createElement("div");
var woord =words[randomWoord(words)]
var row     = 1;
var knopOpnieuw = document.getElementById('opnieuw');
var mainDIV   = document.getElementById('mainDIV');
var inputDIV  = document.getElementById('inputDIV');
var word      = document.getElementById('word');
var raadInput = document.getElementById('raad');
var aantalGoed = 0;

for (var r = 1; r <=5 ; r++) {
  for (var i = 1; i <=5 ; i++) {
  var nieuwDIV = document.createElement("div");
  nieuwDIV.setAttribute("class","letters");
  nieuwDIV.setAttribute("value","incorrect");
  nieuwDIV.setAttribute("id","letter"+i+"row"+r);
  nieuwDIV.innerHTML = "_";
  woordDIV.appendChild(nieuwDIV);
 }
}
knopOpnieuw.style.display = 'none';
gameDiv.setAttribute("id","gameDiv");
console.log(woord)


function wordSelect() {
  var word = words[math.floor(math.random()*word.length)].toUpperCase();
  document.write(word);
}
function randomWoord(items){
return [Math.floor(Math.random()*items.length)];
}
function newWoord() {
  woord = words[randomWoord(words)];
}




function opnieuw() {
  row = 1;
  newWoord();
  for (var r = 1; r <=5 ; r++) {
    for (var i = 1; i <=5 ; i++) {
    var letter = document.getElementById("letter"+i+"row"+r);
    letter.innerHTML = "_";
    letter.style.backgroundColor = "blue";
    letter.style.borderRadius = "0px";
   }
  }
  console.log(woord)
}

function checkString() {
  if (raadInput.value.length === 5) {
    check();
  } else {
    alert("het moet een 5 letter woord zijn")
  }
}

function check() {
  checkG();
  checkV();
  attemptC();
}

function checkG() {
  var splword = woord.split("");
  var splraad = raadInput.value.split("");
  var check   = woord.includes(splraad[i]);

  for (var i = 0; i < splword.length; i++) {
    var letter    = document.getElementById('letter'+(i+1)+"row"+row)
    letter.innerHTML = splraad[i];
    if (splword[i] === splraad[i]) {
      letter.style.backgroundColor = "red";
      letter.style.borderRadius = "0px";
      letter.setAttribute("value","correct")
      aantalGoed++;
    }
}
}


function checkV() {
  var splword = woord.split("");
  var splraad = raadInput.value.split("");
  var check   = woord.includes(splraad[i]);

  for (var i = 0; i < splword.length; i++) {
    var letter    = document.getElementById('letter'+(i+1)+"row"+row)
    letter.innerHTML = splraad[i];
    if (letter.getAttribute("value")==="incorrect") {

    if (splword[i] != splraad[i]) {
     if (woord.includes(splraad[i])) {
       console.log(splword[i]);
       console.log(splraad[i]);
       if (splword[i] === splraad[i-1]) {
         var letChe = document.getElementById("letter"+(i-1)+"row"+row);
         console.log(splraad[i-1]);
         console.log(letChe);
         console.log(letChe.getAttribute("value"));
         if ( letChe.getAttribute("value") != "correct" ) {
           letter.style.borderRadius = "50px";
           letter.style.backgroundColor = "yellow";
         }
       }
       else if (splword[i] === splraad[i-2]) {
         var letChe = document.getElementById("letter"+(i-2)+"row"+row);
         console.log(splraad[i-2]);
         console.log(letChe);
         console.log(letChe.getAttribute("value"));
         if ( letChe.getAttribute("value") != "correct" ) {
           letter.style.borderRadius = "50px";
           letter.style.backgroundColor = "yellow";
         }
       }
       else if (splword[i] === splraad[i-3]) {
         var letChe = document.getElementById("letter"+(i-3)+"row"+row);
         console.log(letChe);
         console.log(letChe.getAttribute("value"));
         if ( letChe.getAttribute("value") != "correct" ) {
           letter.style.borderRadius = "50px";
           letter.style.backgroundColor = "yellow";
         }
       }
       else if (splword[i] === splraad[i-4]) {
         var letChe = document.getElementById("letter"+(i-4)+"row"+row);
         console.log(letChe);
         console.log(letChe.getAttribute("value"));
         if ( letChe.getAttribute("value") != "correct" ) {
           letter.style.borderRadius = "50px";
           letter.style.backgroundColor = "yellow";
         }
       }
       else if (splword[i] === splraad[i+1]) {
         var letChe = document.getElementById("letter"+(i+1)+"row"+row);
         console.log(letChe);
         console.log(letChe.getAttribute("value"));
         if ( letChe.getAttribute("value") != "correct" ) {
           letter.style.borderRadius = "50px";
           letter.style.backgroundColor = "yellow";
         }
       }
       else if (splword[i] === splraad[i+2]) {
         var letChe = document.getElementById("letter"+(i+2)+"row"+row);
         console.log(letChe);
         console.log(letChe.getAttribute("value"));
         if ( letChe.getAttribute("value") != "correct" ) {
           letter.style.borderRadius = "50px";
           letter.style.backgroundColor = "yellow";
         }
       }
       else if (splword[i] === splraad[i+3]) {
         var letChe = document.getElementById("letter"+(i+3)+"row"+row);
         console.log(letChe);
         console.log(letChe.getAttribute("value"));
         if ( letChe.getAttribute("value") != "correct" ) {
           letter.style.borderRadius = "50px";
           letter.style.backgroundColor = "yellow";
         }
       }
       else if (splword[i] === splraad[i+4]) {
         var letChe = document.getElementById("letter"+(i+4)+"row"+row);
         console.log(letChe);
         console.log(letChe.getAttribute("value"));
         if ( letChe.getAttribute("value") != "correct" ) {
           letter.style.borderRadius = "50px";
           letter.style.backgroundColor = "yellow";
         }
       }
     }else {
       letter.style.backgroundColor = "blue";
       letter.style.borderRadius = "0px";
     }
   }
 }
}
}


function attemptC() {
  if (aantalGoed === 5) {
    alert("je hebt gewonnen");
    knopOpnieuw.style.display = "";
  } else {
    aantalGoed = 0;
  }
  if (row === 5) {
    knopOpnieuw.style.display = "";
    alert("de ronde is voorbij");
  }else {
    row++;
  }
}
