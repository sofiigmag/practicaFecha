
function checkDay() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    let daysInMonth = 31;
    if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29;
      } else {
        daysInMonth = 28;
      }
    } else if ([4, 6, 9, 11].includes(month)) {
      daysInMonth = 30;
    }

    if (day > daysInMonth) {
      document.getElementById('result').innerHTML = `El mes ${month} del año ${year} tiene ${daysInMonth} días.`;
      return;
    }

    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    let result = '';
    switch (dayOfWeek) {
      case 0:
        result = 'fin de semana';
        break;
      case 6:
        result = 'fin de semana';
        break;
      default:
        result = 'laboral';
        break;
    }

    document.getElementById('result').innerHTML = `El día ${day}/${month}/${year} es ${daysOfWeek[dayOfWeek]} y es un día ${result}.`;
}