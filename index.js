// https://api.adviceslip.com

async function advice() {
    const quote = await fetch("https://api.adviceslip.com/advice");
    const updatedQuote = await quote.json();
    const quoteQuery = updatedQuote.slip
    console.log(quoteQuery)
    const quoteListElement = document.querySelector('.advice__container');
    quoteListElement.innerHTML = quoteData(quoteQuery)

}

advice();


function quoteData(words) {
    return `<h5 class="adviceNumber">Advice #${words.id}</h5>
    <h2 class="adviceQuote">"${words.advice}"</h2>
    <figure class="img__divider">
      <img class="dividerImg" src="./images/pattern-divider-desktop.svg" alt="" />
    </figure>
    <div class="diceImg__container">
      <img class="dice__img" src="./images/icon-dice.svg" alt="" />
    </div>`
}