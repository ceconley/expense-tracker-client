const api = require('./api')
const ui = require('./ui')
const store = require('./store.js')

// CREATE

const onCreateExpense = (event) => {
  event.preventDefault()
  const currUserId = store.user.id
  const createExpenseData = {
    user_id: currUserId,
    source: $('#create-source').val(),
    amount: $('#create-amount').val(),
    category: $('#create-category').val(),
    description: $('#create-description').val()
  }
  const data = {
    expense: createExpenseData
  }
  api.createExpense(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

// READ - INDEX

const onIndexExpense = (event) => {
  event.preventDefault()
  api.indexExpense()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

// READ - SHOW

const onShowExpense = (event) => {
  event.preventDefault()
  api.showExpense()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onShowForDeleteExpense = () => {
  $('#show-id').val($('#delete-id').val())
  api.showExpense()
    .then(ui.showForDeleteExpenseSuccess)
    .catch(ui.showForDeleteExpenseFailure)
}

// UPDATE

const onUpdateExpense = (event) => {
  event.preventDefault()
  const currUserId = store.user.id
  const updateExpenseData = {
    user_id: currUserId,
    id: $('#update-id').val(),
    source: $('#update-source').val(),
    amount: $('#update-amount').val(),
    category: $('#update-category').val(),
    description: $('#update-description').val()
  }
  const data = {
    expense: updateExpenseData
  }
  api.updateExpense(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

// DELETE

const onDeleteExpense = (event) => {
  event.preventDefault()
  api.deleteExpense()
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

module.exports = {
  onShowExpense,
  onShowForDeleteExpense,
  onIndexExpense,
  onDeleteExpense,
  onUpdateExpense,
  onCreateExpense
}
