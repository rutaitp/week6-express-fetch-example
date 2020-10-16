//when the page loads
window.addEventListener('load', ()=>{
  //fetch json file
  fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let quotes = data.quotes;
    //get random quote
    let randomNum = Math.floor(Math.random()*quotes.length);
    let randomQuote = quotes[randomNum];

    //add text to html
    document.getElementById('pizza-quote').innerHTML = `${randomQuote}`;
  });

  //button interaction
  //add code here
});
