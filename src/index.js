import './scss/style.scss';
import API, { users } from './API.js';
const userNAme = document.querySelector("#userName");
const loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", () => {
    event.preventDefault();
    console.log(userNAme.value)

    if (users.includes(userNAme.value)) {
        console.log("user exists")
        window.open("home.html", "_self");
    } else {
        console.log(users);
        console.log("clicked!")
    }
})