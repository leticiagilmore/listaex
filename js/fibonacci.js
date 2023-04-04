const fibonacci = [0, 1];

for (let i = 2; i < 15; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

const lista = document.getElementById("fibonacci");
fibonacci.forEach(num => {
  const item = document.createElement("li");
  item.innerText = num;
  lista.appendChild(item);
});