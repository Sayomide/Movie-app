// api response
api_key = "724bcb77";
async function gettingMovie() {
  let response = await fetch(`https://www.omdbapi.com/?s=commando&apikey=${api_key}`);
   let data = await response.json();
  console.log(data.Search);
  // document.querySelector(".img").src = data.Poster;
}

// function for search button
  document.querySelector("#search").addEventListener("keyup", () => {
    console.log("keybuped")
    gettingMovie();
  })
//  if emterred serch is === poster api results

//function displayall(){}
// displayall();








/*
http://www.omdbapi.com/?apikey=[yourkey]& // all request
http://img.omdbapi.com/?apikey=[yourkey]& // poster api 
http://www.omdbapi.com/?i=tt3896198&apikey=724bcb77; //
let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${api_key}`);
*/