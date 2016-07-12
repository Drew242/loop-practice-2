var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

console.log(1);
for (i = 0; (i < animals.length - 1); i++) {
  console.log(animals[i]);
}
console.log(2);
for (i = 0; i < animals.length; i++) {
  if (i % 2 == 0) {
    console.log(animals[i]);
  }
}
console.log(3);
{
  animals.reverse();
  for (i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
}
console.log(4);
{
  animals.reverse();
  for (i = 0; i < animals.length; i++) {
    if (i == 0 || i == (animals.length - 1)) {
      console.log(animals[i]);
    }
    else {
      console.log(animals[i]);
      console.log(animals[i]);
    }
  }
}
