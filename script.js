function converterParaDolar() {
  var valorElemento = document.getElementById('valor');
  var valor = valorElemento.value;
  var valorNumericoEmReal = parseFloat(valor);

  var valorEmDolar = valorNumericoEmReal * 5.06;
  valorEmDolar = valorEmDolar.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'USD',
  });

  var elementoValorConvertido = document.getElementById('valorConvertido');
  var valorConvertido = 'O valor em dolar é ' + valorEmDolar;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterParaEuro() {
  var valorElemento = document.getElementById('valor');
  var valor = valorElemento.value;
  var valorNumericoEmReal = parseFloat(valor);

  var valorEmEuro = valorNumericoEmReal * 5.52;
  valorEmEuro = valorEmEuro.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'EUR',
  });

  var elementoValorConvertido = document.getElementById('valorConvertido');
  var valorConvertido = 'O valor em euro é ' + valorEmEuro;

  elementoValorConvertido.innerHTML = valorConvertido;
}
function converterParaBitcoin() {
  var valorElemento = document.getElementById('valor');
  var valor = valorElemento.value;
  var valorNumericoEmReal = parseFloat(valor);

  var valorEmBitcoin = valorNumericoEmReal / 195123.04;
  valorEmBitcoin = valorEmBitcoin.toFixed(8);

  var elementoValorConvertido = document.getElementById('valorConvertido');
  var valorConvertido = 'O valor em bitcoin é BTC ' + valorEmBitcoin;

  elementoValorConvertido.innerHTML = valorConvertido;
}
