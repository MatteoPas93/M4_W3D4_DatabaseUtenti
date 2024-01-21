// import { searchNameFunction, searchUsernameFunction, searchEmailFunction } from "./components.js";

const utentiApi = "https://jsonplaceholder.typicode.com/users";
let utenti;

let nav = document.createElement("nav");
nav.setAttribute(
  "class",
  "section-nav navbar navbar-expand-lg bg-body-tertiary"
);

let containerUser = document.createElement("div");
containerUser.setAttribute("class", "container-user");

async function users() {
  try {
    const response = await fetch(utentiApi);
    utenti = await response.json();
  } catch (error) {
    console.log(error);
  }

  document.body.appendChild(nav);

  document.body.appendChild(containerUser);

  nav.innerHTML += `<div class="container-fluid">
    <a class="navbar-brand" href="">Database Utenti</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cerca utenti
          </a>
          <ul class="dropdown-menu">
          <input class="search-name" type="search" placeholder="Search by name">
          <input class="search-username" type="search" placeholder="Search by username">
          <input class="search-email" type="search" placeholder="Search by email"> 
          </ul>
        </li>
      </ul>
    </div>
  </div>`;

  utenti.forEach((infoUser) => {
    containerUser.innerHTML += `<ul class="lista-user">
                                  <li> <b>Name</b>: ${infoUser.name}; <br>
                                  <b> Username</b>: ${infoUser.username}; <br>
                                  <b>Email</b>: ${infoUser.email}; <br> 
                                  <b>Phone number</b>: ${infoUser.phone}.  
                                  </li>
                                  </ul>`;
  });

  const inputName = document.querySelector(".search-name");
  inputName.addEventListener("change", (event) =>
    searchFunction(event, "name")
  );

  const inputUsername = document.querySelector(".search-username");
  inputUsername.addEventListener("change", (event) =>
    searchFunction(event, "username")
  );

  const inputEmail = document.querySelector(".search-email");
  inputEmail.addEventListener("change", (event) =>
    searchFunction(event, "email")
  );
}
users();

function searchFunction(event, searchValue) {
  const searchCharacter = event.target.value.toLowerCase();
  const results = utenti.filter((user) =>
    user[searchValue].toLowerCase().includes(searchCharacter)
  );

  containerUser.innerHTML = "";

  if (results.length === 0) {
    const noResults = document.createElement("h3");
    noResults.setAttribute("class", "no-results-message");
    noResults.textContent = "Nessun risultato trovato.";
    containerUser.appendChild(noResults);
  }

  results.forEach((user) => {
    const ul = document.createElement("ul");
    ul.innerHTML = ` <li> <b>Name</b>: ${user.name}; <br> 
                              <b> Username </b> : ${user.username}; <br>
                              <b> Email </b> : ${user.email}; <br> 
                              <b> Phone </b> : ${user.phone}.
                         </li> `;
    containerUser.appendChild(ul);
  });
}
