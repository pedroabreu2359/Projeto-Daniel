var message = document.getElementById('message');
message.style.display = "none";

function reserveTable() {
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  if (name && date && time && guests) {
    message.style.display = "block"
    message.innerText = `Reserva confirmada para ${name} em ${date} às ${time} para ${guests} pessoa(s).`;
  } else {
    message.style.display = "block"
    message.innerText = 'Por favor, preencha todos os campos.';
  }
}
