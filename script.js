async function getCitacao() {
  const proxyUrl = 'https://wise-cors.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getCitacao();
    console.log('nenhuma citação', error);
  }
}

getCitacao();
