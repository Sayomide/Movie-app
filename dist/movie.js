// ACTION FOR WHEN WE SEARCH BUTTON
 let searchArea = document.querySelector("#search");
 let theValue;
 searchArea.addEventListener("blur", () => {
 theValue = searchArea.value;
    gettingMovie();
  let mainBody = document.querySelector("#list");
  let newchild = document.createElement("div");
 // newchild.innerHTML = 
 `
   <div class="flex flex-row justify-around items-start  w-72 h-10 bg-gray-300 rounded border-b-2 ml-24 mt-2">
     <img src="noimage.jpg" alt="noimage" class="w-10 h-10 rounded-full p-2">
      <p class="flex flex-col">Title:<span class="" id="title"></span>
      </p>
      <p class="flex flex-col">Year:<span class="" id="year"></span> 
      </p>
      <p class="flex flex-col"> Type:<span class="" id="type"></span>
      </p>
   </div>
 `
 mainBody.appendChild(newchild);
 });
  
 // GETTING THE API RESPONSE
let api_key = "724bcb77";
async function gettingMovie() {
  let response = await fetch(`https://www.omdbapi.com/?s=${theValue}&apikey=${api_key}`);
   let data = await response.json();
//   console.log(data.Search);
   creatingDiv(data)
  // document.querySelector(".img").src = data.Poster;
}
  
 let result;
// creating the div
// let a;
function creatingDiv(data) {
result = data.Search;
if(result) {
// console.log(result)
result.forEach(eachData => {
        console.log(eachData.Title);
   })
}else {
  
}
  }
  
  
  
  
//  if enterred serch is === poster api results




/*
http://www.omdbapi.com/?apikey=[yourkey]& // all request
http://img.omdbapi.com/?apikey=[yourkey]& // poster api 
http://www.omdbapi.com/?i=tt3896198&apikey=724bcb77; //
let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${api_key}`);
*/