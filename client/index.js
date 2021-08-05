// Brings in all the elements from the HTML into the DOM.
const items_list = document.querySelector("#items")
const name_input = document.querySelector("#name")
const amount_input = document.querySelector("#amount")
const add_btn = document.querySelector("#add_btn")
const bt = document.querySelector("#budget_total")

// Keeps track of the budget total.
let total = 0;

// Updates the budget total amount. Takes in the amount, and a boolean of whether or not it is adding to the total (if not then it subtracts).
let updateAmount = (amount, isAddTrue) => {
    if (isAddTrue === true){total += amount} else {total -= amount}
    bt.innerText = `Budget Total: \$${total}`
};

// Button to delete the function. Takes in the eventListener and an amount. It then subtracts that amount from the total removes the target from the parentNode (twice for good measure) so it is delted from the DOM.
let deleteDatBtn = (e, amount) => {
    updateAmount(amount, false)
    e.target.parentNode.parentNode.remove()
};

// On the click of the add event listener at the bottom of the code, it checks if the name and amount fields are filled, and if the amount is greater than 0. Then it creates a DIV for the three elements to reside, being the name of the expense, the amount of the expense, and a delete button.
let addDatMoney = (e) => {
    let name = name_input.value
    let amount = +amount_input.value

    if (name && amount && amount > 0){
        let new_row = document.createElement('div')
        items_list.append(new_row)
        new_row.className = "expense"
        new_row.innerHTML = `<p>${name}</p><p>${amount}</p>`
        let dlt_btn = document.createElement("button")
        dlt_btn.innerHTML = '<img id="dlt_btn" src="../assets/trash_can.svg"/>'
        new_row.append(dlt_btn)
        dlt_btn.addEventListener("click", (e) => deleteDatBtn(e, amount))
        updateAmount(amount, true)
    } 
};

// Event listener, this thing kicks everything off.
add_btn.addEventListener("click", addDatMoney);