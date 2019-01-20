var str = "overpopulation";
var spl = str.split("");
var ar  = [];
ar[0] = spl[0];
ar[1] = spl[1];
ar[2] = spl[2];
ar[3] = spl[3];
ar[4] = spl[4];
var gameDiv = document.createElement("div");


function wordSelect() {
  var word = words[math.floor(math.random()*word.length)].toUpperCase();
  document.write(word);
}
function random_item(items)
{
return [Math.floor(Math.random()*items.length)];
}

gameDiv.setAttribute("id","gameDiv");
console.log(words[random_item(words)])
