// ACTION FOR WHEN WE SEARCH BUTTON
 let searchArea = document.querySelector("#search");
 let theValue;
 searchArea.addEventListener("change", () => {
 theValue = searchArea.value;
    gettingMovie();
 });
  
 // GETTING THE API RESPONSE
let api_key = "724bcb77";
async function gettingMovie() {
  let response = await fetch(`https://www.omdbapi.com/?s=${theValue}&apikey=${api_key}`);
   let data = await response.json();
   creatingDiv(data)
  // document.querySelector(".img").src = data.Poster;
}
  
let result;
// let a;
function creatingDiv(data) {
result = data.Search;
if(result) {
// console.log(result)
result.forEach(eachData => {
  let mainBody = document.querySelector("#list");
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
        console.log(eachData.Title);
   })
}else {
  // when the result is false
}
  }


/*
http://www.omdbapi.com/?apikey=[yourkey]& // all request
http://img.omdbapi.com/?apikey=[yourkey]& // poster api 
http://www.omdbapi.com/?i=tt3896198&apikey=724bcb77; //
let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${api_key}`);
*/