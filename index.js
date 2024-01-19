// import { searchNameFunction, searchUsernameFunction, searchEmailFunction } from "./components.js";

const utentiApi = "https://jsonplaceholder.typicode.com/users"
let utenti;


let nav = document.createElement("nav");
nav.setAttribute("class", "section-nav navbar navbar-expand-lg bg-body-tertiary");


let containerUser = document.createElement("div");
containerUser.setAttribute("class", "container-user"); 


async function users() {
    const response = await fetch(utentiApi) 
    utenti = await response.json()
    console.log(utenti);

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
  </div>`

    utenti.forEach(infoUser => {
        
     containerUser.innerHTML += `<ul class="lista-user">
                                  <li> <b>Name</b>: ${infoUser.name}; <br>
                                  <b> Username</b>: ${infoUser.username}; <br>
                                  <b>Email</b>: ${infoUser.email}; <br> 
                                  <b>Phone number</b>: ${infoUser.phone}.  
                                  </li>
                                  </ul>`
                                });
                                
     const inputName = document.querySelector(".search-name");
     inputName.addEventListener("change", searchNameFunction);

     const inputUsername = document.querySelector(".search-username");
     inputUsername.addEventListener("change", searchUsernameFunction);

     const inputEmail = document.querySelector(".search-email");
     inputEmail.addEventListener("change", searchEmailFunction);
                                                        
}
users()

function searchNameFunction(event) {
    const name = event.target.value.toLowerCase();
    const nameResults = utenti.filter(user => 
        user.name.toLowerCase().includes(name)
    );

    containerUser.innerHTML = ""

    if (nameResults.length === 0) {
        const noResults = document.createElement("h3");
        noResults.setAttribute("class", "no-results-message")
        noResults.textContent = "Nessun risultato trovato.";
        containerUser.appendChild(noResults);
    };

    nameResults.forEach(nameUser => {
        const ul = document.createElement("ul");
        ul.innerHTML = ` <li> <b>Name</b>: ${nameUser.name}; <br> 
                              <b> Username </b> : ${nameUser.username}; <br>
                              <b> Email </b> : ${nameUser.email}; <br> 
                              <b> Phone </b> : ${nameUser.phone}.
                         </li> `
        containerUser.appendChild(ul);
        
    });
;
}
function searchEmailFunction(event) {
    const email = event.target.value.toLowerCase();
    const emailResults = utenti.filter(userEmail => 
        userEmail.email.toLowerCase().includes(email));

        containerUser.innerHTML = ""

        if (emailResults.length === 0) {
            const noResults = document.createElement("h3");
            noResults.setAttribute("class", "no-results-message")
            noResults.textContent = "Nessun risultato trovato.";
            containerUser.appendChild(noResults);
        };

        emailResults.forEach(emailUser => {
            const ul = document.createElement("ul");
            ul.innerHTML = ` <li> <b>Name</b>: ${emailUser.name},; <br>
                                  <b> Username </b> : ${emailUser.username}; <br>
                                  <b> Email </b> : ${emailUser.email}; <br>
                                  <b> Phone </b> : ${emailUser.phone}.
                             </li> `
            containerUser.appendChild(ul);
        });
};

function searchUsernameFunction(event) {
    const username = event.target.value.toLowerCase();
    const usernameResults = utenti.filter(userUsername =>
        userUsername.username.toLowerCase().includes(username));

        containerUser.innerHTML = ""

        if (usernameResults.length === 0) {
            const noResults = document.createElement("h3");
            noResults.setAttribute("class", "no-results-message")
            noResults.textContent = "Nessun risultato trovato.";
            containerUser.appendChild(noResults);
        };
        
        usernameResults.forEach(usernameUser => {
            const ul = document.createElement("ul");
            ul.innerHTML = ` <li> <b>Name</b>: ${usernameUser.name}; <br>
                                  <b> Username </b> : ${usernameUser.username}; <br>
                                  <b> Email </b> : ${usernameUser.email}; <br>
                                  <b> Phone </b> : ${usernameUser.phone}.
                             </li> `
            containerUser.appendChild(ul);
        });
};

