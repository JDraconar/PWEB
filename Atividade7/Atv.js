var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));
var num3 = parseFloat(prompt("Digite o terceiro número: "));
function maior(a,b,c) {
    if(a>=b && a>=c)
    return a;
    if(b>=a && b>=c)
    return b;
    if(c>=a && c>=b)
    return c;
};
alert("Maior Numero é: " + maior(num1,num2,num3));
