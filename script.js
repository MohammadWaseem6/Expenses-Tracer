// Initialize empty array to store expenses
let expenses = [];

// Initialize variable to store total amount
let totalAmount = 0;

// Retrieve HTML element by its ID and assign it to a variable
const categorySelect = document.getElementById('category-select');

// Retrieve HTML element by its ID and assign it to a variable
const amountInput = document.getElementById('amount-input');

// Retrieve HTML element by its ID and assign it to a variable
const dateInput = document.getElementById('date-input');

// Retrieve HTML element by its ID and assign it to a variable
const expenseTableBody = document.getElementById('expenses-table-body');

// Retrieve HTML element by its ID and assign it to a variable
const totalAmountCell = document.getElementById('total-amount');

// Retrieve HTML element by its ID and assign it to a variable
const addBtn = document.getElementById('add-button');

// Add event listener to the 'click' event of the add button
addBtn.addEventListener('click', function () {

    // Retrieve the value of the selected option in the category dropdown and assign it to a variable
    const category = categorySelect.value;

    // Retrieve the value entered in the amount input field, convert it to a floating-point number, and assign it to a variable
    const amount = parseFloat(amountInput.value);

    // Retrieve the value entered in the date input field and assign it to a variable
    const date = dateInput.value;

    // Check if category is empty
    if (category === '') {
        alert("Please select a Category");
        return; // Stop execution if category is empty
    }

    // Check if amount is not a number or less than or equal to 0
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return; // Stop execution if amount is invalid
    }

    // Check if date is empty
    if (date === '') {
        alert("Please select a Date");
        return; // Stop execution if date is empty
    }

    // Add expense details to the expenses array
    expenses.push({ category, amount, date });

    // Update total amount by adding the new expense amount
    totalAmount += amount;

    // Update the total amount displayed on the page
    totalAmountCell.textContent = totalAmount.toFixed(2); // Rounded to 2 decimal places

    // Create a new row in the expenses table
    const newRow = expenseTableBody.insertRow();

    // Insert cells for each column in the row
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    // Create a delete button for the row
    const deleteBtn = document.createElement('button');

    // Configure delete button
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        // Find index of the row to be deleted
        const rowIndex = newRow.rowIndex - 1; // Adjust for table header row

        // Update total amount by subtracting the deleted expense amount
        totalAmount -= expenses[rowIndex].amount;

        // Update the total amount displayed on the page
        totalAmountCell.textContent = totalAmount.toFixed(2); // Rounded to 2 decimal places

        // Remove the expense from the expenses array
        expenses.splice(rowIndex, 1);

        // Remove the row from the table
        newRow.remove();
    });

    // Populate cells with expense details
    categoryCell.textContent = category;
    amountCell.textContent = amount.toFixed(2); // Rounded to 2 decimal places
    dateCell.textContent = date;

    // Append the delete button to the delete cell
    deleteCell.appendChild(deleteBtn);
});
