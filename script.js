//Ascending
function myfun() {
  const myvar = [1, 6, 49, 44, 12, 98, 81, 35, 45, 352, 2];
  myvar.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("myid").innerHTML = myvar;
}

//Decending
function myfun2() {
  const myvar = [1, 6, 49, 44, 12, 98, 81, 35, 45, 352, 2];
  var result = myvar.sort(function (a, b) {
    return b - a;
  });
  document.getElementById("myid2").innerHTML = myvar;
}
