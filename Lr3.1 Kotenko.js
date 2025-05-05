function random(min, max) {
  return Math.random() * (max - min) + min;
}

function showThreeRandoms() {
  alert(random(1, 5)); // приклад: 1.5219623452
  alert(random(1, 5)); // приклад: 3.6377232423
  alert(random(1, 5)); // приклад: 4.8764814525
}