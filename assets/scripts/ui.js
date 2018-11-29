// const store = require('./store.js')

const onShowSuccess = (response) => {
  console.log(response)
  const expenseHTML = (`
    <h6>ID: ${response.expense.id}</h6>
    <p>Source: ${response.expense.source}</p>
    <p>Amount: ${response.expense.amount}</p>
    <p>Category: ${response.expense.category}</p>
    <p>Description: ${response.expense.description}</p>
    `)
  $('#results').append(expenseHTML)
}
const onShowFailure = () => {
  $('#results').html('Show Expense Failed')
}
const onIndexSuccess = (response) => {
  console.log(response)
  response.expenses.forEach(expense => {
    const expenseHTML = (`
      <h6>ID: ${expense.id}</h6>
      <p>Source: ${expense.source}</p>
      <p>Amount: ${expense.amount}</p>
      <p>Category: ${expense.category}</p>
      <p>Description: ${expense.description}</p>
      `)
    $('#results').append(expenseHTML)
  })
}
const onIndexFailure = () => {
  $('#results').html('Show All Expenses Failed')
}
const onDestroySuccess = () => {
  $('#results').html('Expense Deleted')
}
const onDestroyFailure = () => {
  $('#results').html('Delete Expense Failed')
}
const onUpdateSuccess = () => {
  $('#results').html('Expense Updated')
}
const onUpdateFailure = () => {
  $('#results').html('Update Expense Failed')
}
const onCreateSuccess = (data) => {
  $('#results').html('Expense Created')
}
const onCreateFailure = () => {
  $('#results').html('Create Expense Failed')
}

module.exports = {
  onShowSuccess,
  onShowFailure,
  onIndexSuccess,
  onIndexFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateSuccess,
  onCreateFailure
}
