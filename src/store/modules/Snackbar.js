import * as constants from '@/store/constants'

const state = () => ({
  snack: null,
  color: 'info',
  tx: 0,
  loader: false,
  subSnack: '',
})

const mutations = {
  // setSnack(state, snack) {
  [constants.SNACK_SET]: (state, snack) => {
    state.snack = snack
    state.color = 'info'
    state.loader = false
    state.subSnack = ''
    state.tx = 0
  },
  // setFailTxSnack(state, objSuccess) {
  [constants.SNACK_SET_FAIL_TX]: (state, objSuccess) => {
    state.snack = 'Fail !'
    state.color = 'error'
    state.tx = 0
    state.loader = false
    state.subSnack = objSuccess.error
  },
  // setSuccessTxSnack(state, objSuccess) {
  [constants.SNACK_SET_SUCCESS_TX]: (state, objSuccess) => {
    console.log('OBJ SUCCESS', objSuccess)
    state.snack = 'Success !'
    state.color = 'success'
    state.tx = objSuccess.tx
    state.loader = false
    state.subSnack = `You have successfully ${objSuccess.action} ${objSuccess.token} with ${objSuccess.amount}`
  },
  // setWaitTxSnack(state) {
  [constants.SNACK_SET_WAIT_TX]: (state) => {
    state.snack = ''
    state.color = 'info'
    state.loader = true
    state.subSnack = 'Awaiting transaction approval'
    state.tx = 0
  },
}

const getters = {
  getSnack() {
    return state.snack
  },
}

export default {
  state,
  mutations,
  getters,
}