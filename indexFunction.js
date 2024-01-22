const utentiApi = "https://jsonplaceholder.typicode.com/users";
let utenti;

export function searchFunction(event, searchValue, utenti) {
  const containerUser = document.querySelector(".container-user");
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

  if (searchCharacter.length !== 0) {
    saveResults(searchCharacter, searchValue);
  }
}

let nameElements = [];
let usernameElements = [];
let emailElements = [];

export function saveResults(searchElement, searchValue) {
  const storageList = document.querySelector(".storage");

  if (searchValue === "name") {
    nameElements.push(searchElement);
    localStorage.setItem("Name", JSON.stringify(nameElements));

    storageList.innerHTML = "";

    for (let i = 0; i < nameElements.length; i++) {
     resultList(nameElements[i], storageList);
    }
  }
  if (searchValue === "username") {
    usernameElements.push(searchElement);
    localStorage.setItem("Username", JSON.stringify(usernameElements));

    storageList.innerHTML = "";

    for (let i = 0; i < usernameElements.length; i++) {
     resultList(usernameElements[i], storageList);
    }
  }
  if (searchValue === "email") {
    emailElements.push(searchElement);
    localStorage.setItem("Email", JSON.stringify(emailElements));

    storageList.innerHTML = "";

    for (let i = 0; i < emailElements.length; i++) {
     resultList(emailElements[i], storageList);
    }
  }
}

function resultList(result) {
  const ul = document.querySelector(".storage")
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "searchList");
  listItem.textContent = result + ".";
  ul.appendChild(listItem)
}
