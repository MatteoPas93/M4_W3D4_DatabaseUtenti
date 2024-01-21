// const utentiApi = "https://jsonplaceholder.typicode.com/users";
// let utenti;


// export async function fetchUsers() {
//     const response = await fetch(utentiApi);
//     utenti = await response.json() 
// }

// export function searchFunction(event, searchValue) {
//     const searchCharacter = event.target.value.toLowerCase();
//     const results = utenti.filter((user) => 
//         user[searchValue].toLowerCase().includes(searchCharacter)
//     )
//     containerUser.innerHTML = "";

//   if (results.length === 0) {
//     const noResults = document.createElement("h3");
//     noResults.setAttribute("class", "no-results-message");
//     noResults.textContent = "Nessun risultato trovato.";
//     containerUser.appendChild(noResults);
//   }

//   results.forEach((user) => {
//     const ul = document.createElement("ul");
//     ul.innerHTML = ` <li> <b>Name</b>: ${user.name}; <br> 
//                               <b> Username </b> : ${user.username}; <br>
//                               <b> Email </b> : ${user.email}; <br> 
//                               <b> Phone </b> : ${user.phone}.
//                          </li> `;
//     containerUser.appendChild(ul);
//   });
// }