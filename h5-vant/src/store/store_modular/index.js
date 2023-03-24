const state = {
    name: '勇敢小陈'
}
const getters = {

}
const actions = {

}
const mutations = {
    operation(state, value) {
        state.name += value
    }
}

const store_modular = {
    namespaced: true,//开启命名空间，命名空间是为了解决方法可能出现命名重复的问题
    state,
    getters,
    actions,
    mutations
}
export default store_modular
