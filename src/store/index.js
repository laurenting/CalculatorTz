// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     deposit: {
//       name: '定金',
//       money: null,
//       way: ''
//     },
//     downpayment: {
//       name: '首付',
//       money: null,
//       way: ''
//     },
//     loan: {
//       name: '贷款',
//       money: null,
//       way: ''
//     },
//     propertySecurity: {
//       name: '物业保证金',
//       money: null,
//       way: ''
//     },
//     registerSecurity: {
//       name: '户口报证金',
//       money: null,
//       way: ''
//     },
//     result: null,
//     tongji: ''
//   },
//   mutations: {
//     setstatemoney (state, payload) {
//       state[payload.name].money = payload.money
//     },
//     setstateway (state, payload) {
//       state[payload.name].way = payload.way
//     },
//     setstateresult (state) {
//       var arr = []
//       Object.keys(state).forEach((key) => {
//         return arr.push(state[key])
//       })
//       arr.pop()
//       arr.pop()
//       var newArr = arr.filter(item => {
//         return item.way === '自行支付'
//       })
//       console.log(newArr)
//       var result = newArr.reduce((pre, cur) => {
//         pre += Number(cur.money)
//         return pre
//       }, 0)
//       state.result = result
//       var str = newArr.reduce((pre, cur) => {
//         pre += `+${cur.name}`
//         return pre
//       }, '')

//       state.tongji = str.substr(1)
//     }
//   },
//   actions: {

//   },
//   modules: {
//   }
// })
