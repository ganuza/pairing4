var names = ["Tim", "Judy", "Ryan", "Adam"];

var alphaList = (names.sort());
//console.log(alphaList);

for (var i = 0; i < names.length; i++) {
  //console.log(alphaList[i]);
  console.log(`${i+1}. ${alphaList[i]}`);
  //console.log(`${i} ${alphaList[i]}`)
}