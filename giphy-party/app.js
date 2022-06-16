// create DOM
const headerEl = document.querySelector(".header");
const h1El = document.querySelector(".h1");
const searchBarEl = document.querySelector(".search-bar");
const searchFormEl = document.querySelector("#search-form");
const searchInputEl = document.querySelector("#search-input");
const submitBttnEl = document.querySelector("#submit");
const resultsEl = document.querySelector(".results");

// API 
const URL ="https://api.giphy.com/v1/gifs/search?api_key=5tupGN1nXPqbwQOavIOGIWghAW5plXYQ=REPLACE_ME&limit=10&offset=0&rating=g&lang=en"
const API ="5tupGN1nXPqbwQOavIOGIWghAW5plXYQ"



function showGiph(results){

    const showBoard = results.map(gif => 
        `
        <div class="giphy">
        <img src= "${gif.images.original.url}" /> 
        </div>`);
    resultsEl.innerHTML +=  showBoard;
}


async function getResults(){
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${API}&q=${searchInputEl.value}`);
    console.log('searchInputEl.val: ', searchInputEl.value);
    const responseJson = await response.json();
    console.log('responseJson: ', responseJson);
    showGiph(responseJson.data);
   
   
    
}

searchFormEl.addEventListener('submit', (event)=> {
    event.preventDefault();
    getResults()
})

async function handleFormSubmit(e){
    e.preventDefault();
    const load = await getResults();
    showGiph(load);
}
