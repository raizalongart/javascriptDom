const fadeInText = document.getElementById("fadeInText");
const alertBtn = document.getElementById("alertBtn");

const fadeIn = (el) => {
    el.classList.remove("fadeInText");  
    el.classList.add("show");
  }
  
  fadeIn(fadeInText);


const fetchApi = async (api) => {
  const textContainer = document.getElementById("textContainer");
  let response = await fetch(api).catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    textContainer.innerHTML='There has been a problem';
    textContainer.style.backgroundColor="red";
  });
  let json = await response.json();
  let joke = await json.value.joke;
  textContainer.innerHTML=joke;
}


  fetchApi("http://api.icndb.com/jokes/random");

alertBtn.addEventListener("click", ()=>{fetchApi("http://api.icndb.com/jokes/random")});

const fetchGithubApi = async (api) => {
  const gihubApiResultsContainer = document.getElementById("gihubApiResults");
  gihubApiResultsContainer.innerHTML="";
  let response = await fetch(api).catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    gihubApiResultsContainer.innerHTML='There has been a problem';
    gihubApiResultsContainer.style.backgroundColor="red";
  });
  let results = await response.json();
  let apiItems = results.items;
  apiItems.forEach(element => {
    gihubApiResultsContainer.innerHTML+=`<li><a href="${element.html_url}" target="_blank">${element.html_url}</a></li>`;
  });
}

fetchGithubApi("https://api.github.com/search/repositories?q=javascript");


const submitBtn = document.getElementById("submitButton");

const searchInputValue = () => {
  let searchText = document.getElementById("searchGithubRepo").value;
  fetchGithubApi("https://api.github.com/search/repositories?q=" + searchText);
}


submitBtn.addEventListener("click", searchInputValue);
