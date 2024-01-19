// const utentiApi = "https://jsonplaceholder.typicode.com/users"
// let utenti;

// let containerUser = document.createElement("div");
// // containerUser.setAttribute("class", "container-user"); 

// async function users() {
//     const response = await fetch(utentiApi) 
//     utenti = await response.json()
// }
// users()

// export function searchNameFunction(event) {
//     const name = event.target.value.toLowerCase();
//     const nameResults = utenti.filter(user => 
//         user.name.toLowerCase().includes(name)
//     );

//     containerUser.innerHTML = ""

//     if (nameResults.length === 0) {
//         const noResults = document.createElement("h3");
//         noResults.setAttribute("class", "no-results-message")
//         noResults.textContent = "Nessun risultato trovato.";
//         containerUser.appendChild(noResults);
//     };

//     nameResults.forEach(nameUser => {
//         const ul = document.createElement("ul");
//         ul.innerHTML = ` <li> <b>Name</b>: ${nameUser.name}, 
//                               <b> Username </b> : ${nameUser.username},
//                               <b> Email </b> : ${nameUser.email}, 
//                               <b> Phone </b> : ${nameUser.phone}
//                          </li> `
//         containerUser.appendChild(ul);
        
//     });
// ;
// }
// export function searchEmailFunction(event) {
//     const email = event.target.value.toLowerCase();
//     const emailResults = utenti.filter(userEmail => 
//         userEmail.email.toLowerCase().includes(email));

//         containerUser.innerHTML = ""

//         if (emailResults.length === 0) {
//             const noResults = document.createElement("h3");
//             noResults.setAttribute("class", "no-results-message")
//             noResults.textContent = "Nessun risultato trovato.";
//             containerUser.appendChild(noResults);
//         };

//         emailResults.forEach(emailUser => {
//             const ul = document.createElement("ul");
//             ul.innerHTML = ` <li> <b>Name</b>: ${emailUser.name}, 
//                                   <b> Username </b> : ${emailUser.username},
//                                   <b> Email </b> : ${emailUser.email}, 
//                                   <b> Phone </b> : ${emailUser.phone}
//                              </li> `
//             containerUser.appendChild(ul);
//         });
// };


// export function searchUsernameFunction(event) {
//     const username = event.target.value.toLowerCase();
//     const usernameResults = utenti.filter(userUsername =>
//         userUsername.username.toLowerCase().includes(username));

//         containerUser.innerHTML = ""

//         if (usernameResults.length === 0) {
//             const noResults = document.createElement("h3");
//             noResults.setAttribute("class", "no-results-message")
//             noResults.textContent = "Nessun risultato trovato.";
//             containerUser.appendChild(noResults);
//         };
        
//         usernameResults.forEach(usernameUser => {
//             const ul = document.createElement("ul");
//             ul.innerHTML = ` <li> <b>Name</b>: ${usernameUser.name},
//                                   <b> Username </b> : ${usernameUser.username},
//                                   <b> Email </b> : ${usernameUser.email}, 
//                                   <b> Phone </b> : ${usernameUser.phone}
//                              </li> `
//             containerUser.appendChild(ul);
//         });
// };