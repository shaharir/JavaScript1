//nexted loop

for (var i = 1; i <= 5; i++) {
  var result = "";
  for (var k = 1; k <= i; k++) {
    result += "*" + " ";
  }
  console.log(result);
}
