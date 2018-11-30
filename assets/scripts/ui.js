
const resetForms = () => {
  $('#show-expense')[0].reset()
  $('#index-expense')[0].reset()
  $('#create-expense')[0].reset()
  $('#destroy-expense')[0].reset()
  $('#update-expense')[0].reset()
  $('#results').html('')
}

const onShowSuccess = (response) => {
  resetForms()
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
  resetForms()
  $('#results').html('Show Expense Failed')
}
const onIndexSuccess = (response) => {
  resetForms()
  response.expenses.forEach(expense => {
    const expenseHTML = (`
      <h6>ID: ${expense.id}</h6>
      <p>Source: ${expense.source}</p>
      <p>Amount: ${expense.amount}</p>
      <p>Category: ${expense.category}</p>
      <p>Description: ${expense.description}</p>
      `)
    $('#results').html(expenseHTML)
  })
}
const onIndexFailure = () => {
  resetForms()
  $('#results').html('Show All Expenses Failed')
}
const onDestroySuccess = () => {
  resetForms()
  $('#results').html('Expense Deleted')
}
const onDestroyFailure = () => {
  resetForms()
  $('#results').html('Delete Expense Failed')
}
const onUpdateSuccess = () => {
  resetForms()
  $('#results').html('Expense Updated')
}
const onUpdateFailure = () => {
  resetForms()
  $('#results').html('Update Expense Failed')
}
const onCreateSuccess = (data) => {
  $('#results').html('Expense Created')
  resetForms()
}
const onCreateFailure = () => {
  $('#results').html('Create Expense Failed')
  resetForms()
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
