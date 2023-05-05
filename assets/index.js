function verificar() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    const anio = parseInt(document.getElementById('anio').value);

    let duracionMes = 31;
    if (mes === 2) {
      if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        duracionMes = 29;
      } else {
        duracionMes = 28;
      }
    } else if ([4, 6, 9, 11].includes(mes)) {
      duracionMes = 30;
    }

    if (dia > duracionMes) {
      document.getElementById('resultado').innerHTML = `El año ${anio} no es bisiesto.`;
      return;
    }

    const fechaVerificada = new Date(anio, mes - 1, dia);
    const diaEnLaSemana = fechaVerificada.getDay();

    const diasDeLaSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

    let result = '';
    switch (diaEnLaSemana) {
      case 0:
        result = 'fin de semana';
        break;
      case 6:
        result = 'fin de semana';
        break;
      default:
        result = 'laborable';
        break;
    }

    document.getElementById('resultado').innerHTML = `El día ${dia}/${mes}/${anio} es ${diasDeLaSemana[diaEnLaSemana]} y es ${result}.`;
}