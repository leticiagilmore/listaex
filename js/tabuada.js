
let num = parseInt(prompt("Digite um número inteiro de 1 a 10:"));

if (num >= 1 && num <= 10) {
 for (let i = 1; i <= 10; i++) {
   
    let result = num * i;

    document.write(num + " x " + i + " = " + result + "<br>");
    document.write('<body style="background-color: black; color: white; font-size: 50px"></body>')
  }
} else {
  alert("O número que você digitou não está dentro do intervalo permitido!");
}
