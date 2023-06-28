const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
1290.00, 15000.00];

const indexSalarioMaior = salarios.findIndex( function(salario) {
  return salario > 7500;
});

console.log("Primeiro salário maior que R$7500,00 é: R$" + salarios[indexSalarioMaior].toFixed(2));

const salariosGrandes = salarios.filter( function(salario) {
    return salario > 8000;
  } );
  
  console.log("Os salários maiores que R$8000,00 são: R$" + salariosGrandes.join(", R$"));
  
