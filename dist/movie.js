// ACTION FOR WHEN WE SEARCH BUTTON'

 let searchArea = document.querySelector("#search");
 let theValue;
 if(searchArea){
 document.addEventListener("change", () => {
 theValue = searchArea.value;
 gettingMovie();
  });
 } 
  
 // GETTING THE API RESPONSE
let api_key = "724bcb77";
async function gettingMovie() {
  let response = await fetch(`https://www.omdbapi.com/?s=${theValue}&apikey=${api_key}`);
  let data = await response.json();
  let detailsResponse = data.Search[0].imdbID;
 console.log(detailsResponse);
 creatingDiv(data);
console.log(detailsResponse.Trailer);
}

// APPEDING THE CHILD AND OTHERS
let result;
function creatingDiv(data) {
  let mainBody = document.querySelector("#list");
    result = data.Search;
    while (mainBody.firstChild) {
    mainBody.removeChild(mainBody.firstChild);
  }
  if(result) {
    result.forEach(eachData => {
    let newchild = document.createElement("div");
    mainBody.appendChild(newchild);
 newchild.innerHTML = 
 `
   <div class="flex flex-row justify-around items-start  w-96 h-20 bg-gray-300 rounded border-b-2 mt-2">
     <img src=${eachData.Poster} alt="noimage" class="w-10 h-10 rounded-full p-2">
      <p class="flex flex-col justify-center items-center m-2"><b>Title:</b><span class="" id="title">${eachData.Title}</span>
      </p>
      <p class="flex flex-col justify-center items-center m-2"><b>Year:</b><span class="" id="year">${eachData.Year}</span> 
      </p>
      <p class="flex flex-col justify-center items-center m-2"><b>Type:</b><span class="" id="type">${eachData.Type}</span>
      </p>
   </div>
 `
 newchild.addEventListener("click", ()=> {
 toDisplay(eachData);
 })
 // console.log(eachData);
 })
} else {
  // when the result is false nothing happens
let newchild = document.createElement("div");
    mainBody.appendChild(newchild);
 newchild.innerHTML = "No result";
}
}
 
// TO DISPLAY THE INFO WHEN SELECTED
function toDisplay(eachData){
  let mainImage = document.querySelector("#img");
  let mainTitle = document.querySelector(".title");
  let mainYear = document.querySelector(".year");
  let mainType = document.querySelector(".type");
  mainImage.src = eachData.Poster;
  mainTitle.innerHTML = eachData.Title;
  mainYear.innerHTML = eachData.Year;
  mainType.innerHTML =eachData.Type;
}

// download button yo download the film
function download(){
}

// also to be able to play pause


// NEXT WORK