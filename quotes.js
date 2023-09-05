let qContainer = document.querySelector(".quote")

let qAuthor = document.querySelector(".author")

let getQuotesData = [];

async function fetchData() {

    qContainer.innerHTML = ""
    const response = await fetch('https://type.fit/api/quotes')
    const data = await response.json();

    getQuotesData = data;

    // console.log(data[100].text);


    const len = data.length;

    let randomNo = Math.floor(Math.random() * len)

    const arrRandom = Array(10).fill().map(() => Math.floor(len * Math.random()))

    for (let i = 0; i < arrRandom.length; i++) {
        const element = arrRandom[i];

        qContainer.innerHTML += `  <blockquote class="quote">"${data[element].text}"
        <br> &mdash;  <cite/> by ${data[element].author}</blockquote>`

        // qAuthor.innerHTML+=`<li>${data[element].author}</li>`


        qAuthor.innerHTML += `<li> <input id="radio"  type="radio" name="author" value="${data[element].author}">${data[element].author}</li>`
    }

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", filterQuotesByAuthor);
    });


}



function filterQuotesByAuthor() {

    let selectedAuthor;
    let x = document.getElementById("radio").checked;

    var ele = document.getElementsByTagName('input');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].type = "radio") {

            if (ele[i].checked) {
                selectedAuthor = ele[i].value
            }
        }
    }

    // console.log(selectedAuthor);

    const newFilterQuote = getQuotesData.filter((q)=>{
       
       return q.author===selectedAuthor
    })
    qContainer.innerHTML="";
    newFilterQuote.forEach((quote)=>{
        qContainer.innerHTML += `<blockquote class="quote">"${quote.text}"
                 <br> &mdash;  <cite>${quote.author}</cite></blockquote>`;
    });
}




