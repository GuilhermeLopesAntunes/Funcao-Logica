
function saldo (vitorias,derrotas){
    return vitorias-derrotas;
}

saldo = saldo(90,5);

if(saldo<10){
    console.log(`O Herói tem de saldo de ${saldo} está no nível de Ferro`)
}
else if(saldo>10 && saldo<=20){
    console.log(`O Herói tem de saldo de ${saldo} está no nível de Bronze`)
}
else if(saldo>20 && saldo<=50){
    console.log(`O Herói tem de saldo de ${saldo} está no nível de Prata`)
}
else if(saldo>50 && saldo<=80){
    console.log(`O Herói tem de saldo de ${saldo} está no nível de Ouro`)
}
else if(saldo>80 && saldo<=90){
    console.log(`O Herói tem de saldo de ${saldo} está no nível de Diamante`)
}
else if(saldo>90 && saldo<=100){
    console.log(`O Herói tem de saldo de ${saldo} está no nível de Lendário`)
}
else{
    console.log(`O Herói tem de saldo de ${saldo} está no nível de Imortal`)
}