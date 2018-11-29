// const store = require('./store.js')

const onShowSuccess = (response) => {
  console.log(response)
}
const onShowFailure = () => {
  $('#results').html('Show Expense Failed')
}
const onIndexSuccess = () => {}
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
