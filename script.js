function reserveTable() {
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  if (name && date && time && guests) {
      document.getElementById('message').innerText = `Reserva confirmada para ${name} em ${date} às ${time} para ${guests} pessoa(s).`;
  } else {
      document.getElementById('message').innerText = 'Por favor, preencha todos os campos.';
  }
}
