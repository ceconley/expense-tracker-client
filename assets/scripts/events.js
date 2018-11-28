const api = require('./api')
const ui = require('./ui')

const onShowExpense = () =>
  api.showExpense()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
const onIndexExpense = () =>
  api.indexExpense()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
const onDestroyExpense = () =>
  api.destroyExpense()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
const onUpdateExpense = () =>
  api.updateExpense()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
const onCreateExpense = () =>
  api.createExpense()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)

module.exports = {
  onShowExpense,
  onIndexExpense,
  onDestroyExpense,
  onUpdateExpense,
  onCreateExpense
}
