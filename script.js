let personSelectOperation= Number(prompt("Selecione uma operação\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Potenciação"));
let value1 = Number(prompt("Insira o primeiro valor:"))
let value2 = Number(prompt("Insira o segundo valor:"))

if(personSelectOperation == 1)
{
    let result = value1+value2;
    console.log(result);
};

if(personSelectOperation == 2)
{
    let result = value1-value2;
    console.log(result);
};

if(personSelectOperation == 3)
{
    let result = value1*value2;
    console.log(result);
};

if(personSelectOperation == 4)
{
    let result = value1/value2;
    console.log(result);
};

if(personSelectOperation == 5)
{
    let result = value1**value2;
    console.log(result);
};
