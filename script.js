let personSelectOperation= Number(prompt("Selecione uma operação\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Potenciação"));
let value1 = Number(prompt("Insira o primeiro valor:"))
let value2 = Number(prompt("Insira o segundo valor:"))
let result = 0

switch(personSelectOperation) 
{ case 1:
    result = value1+value2;
    console.log(result);
    break;
    case 2:
    result = value1-value2;
    console.log(result)
    break;
    case 3:
    result = value1*value2;
    console.log(result)
    break;
    case 4:
    result = value1/value2;
    console.log(result)
    break;
    case 5:
    result = value1**value2;
    console.log(result)
    break;
}