//summation 1-5
var sum = 0;
for (var i = 1; i <= 5; i++) {
  console.log(i + "+" + sum + "=" + (sum + i));
  sum += i;
}
console.log(sum);
