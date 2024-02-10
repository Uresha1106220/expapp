let expenses = [];

function addExpense() {
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;

    if (!amount || !description || !date) {
        alert("Please fill in all fields.");
        return;
    }

    expenses.push({ amount, description, date });
    alert("Expense added successfully.");
}

function viewExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>Amount:</span>${expense.amount} | <span>Description:</span>${expense.description} | <span>Date:</span>${expense.date} <button onclick="deleteExpense(${index})">Delete</button>`;
        expenseList.appendChild(li);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    alert("Expense deleted successfully.");
}
