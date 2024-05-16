let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollPos = currentScrollPos;
}

function reserveTable() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (name && date && time && guests) {
        const message = `Olá, ${name}! Sua reserva para ${guests} pessoa(s) na data ${date} às ${time} foi confirmada.`;
        document.getElementById('message').innerText = message;
    } else {
        document.getElementById('message').innerText = 'Por favor, preencha todos os campos.';
    }
}