var a = [1, 2, 3, 4, 5];
var sum = 0;
for (i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    console.log(a[i]);
    sum += a[i];
  }
}
console.log(sum);
