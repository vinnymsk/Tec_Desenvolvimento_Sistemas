let nota = 4;

function validarNotas(nota) {
  switch (nota) {
    case 10:
      return "A+";
    case 9:
      return "A";
    case 8:
      return "B+";
    case 7:
      return "B";
    case 6:
      return "C+";
    case 5:
      return "C";
    case 5:
      return "D+";
    case 4:
      return "D";
    case 3:
      return "E+";
    case 2:
      return "E";
    case 1:
      return "F";

    default:
      return("Mensagem de erro");
  }
}

console.log(`${nota}`)