const form = document.querySelector(".form");
const addExpense = document.querySelector(".add");
const content = document.querySelector("#info");
const firstDisplay = document.querySelector(".first-display");
const usernameInput = document.querySelector(".username");
const dateInput = document.querySelector(".date");
const amountInput = document.querySelector(".amount");
const deleteButton = document.querySelector(".delete");

const generateTemplate = (() => {
    
    let html = `
        <tr class="content">
            <td>${usernameInput.value}</td>
            <td>${dateInput.value}</td>
            <td>${amountInput.value}</td>
            <td class="delete">x</td>
        </li>
    `;
    
    if(document.querySelector('#info').children.length === 1){
        document.querySelector('#alert').classList.add('hide');
    }
    content.innerHTML += html;
});


// the button's code
addExpense.addEventListener("click", e => {
    e.preventDefault()

    generateTemplate();
    form.reset();
});


// remove expense
content.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});
