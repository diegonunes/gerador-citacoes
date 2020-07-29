const containerCitacao = document.getElementById('container-citacao');
const textoCitacao = document.getElementById('citacao');
const autorCitacao = document.getElementById('autor');
const twitterBotao = document.getElementById('twitter');
const novaCitacaoBotao = document.getElementById('nova-citacao');

async function getCitacao() {
  const proxyUrl = 'https://wise-cors.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();

    if (data.quoteAuthor === '') {
      autorCitacao.innerHTML = 'Unknown author';
    } else {
      autorCitacao.innerHTML = data.quoteAuthor;
    }

    if (data.quoteText.length > 120) {
      textoCitacao.classList.add('citacao-longa');
    } else {
      textoCitacao.classList.remove('citacao-longa');
    }
    textoCitacao.innerHTML = data.quoteText;
  } catch (error) {
    console.log(error);
    getCitacao();
  }
}

function tweetCitacao() {
  const citacao = textoCitacao.innerText;
  const autor = autorCitacao.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${citacao} - ${autor}`;
  window.open(twitterUrl, '_blank');
}

novaCitacaoBotao.addEventListener('click', getCitacao);
twitterBotao.addEventListener('click', tweetCitacao);

getCitacao();
