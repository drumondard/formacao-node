function operacao(a, b, c, op){
    var result = 0;
    if(op == "somar"){
        result = a + b + c;
    } 
    if(op == "mult"){
        result = a * b * c;
    } 

   
    exibirRsultado(result, op);
}

function exibirRsultado(result, operacao){
    return console.log("Resultado da "+ operacao + " é:  " + result )
}

operacao(10,10, 5, "somar");
operacao(10,10, 2, "mult");