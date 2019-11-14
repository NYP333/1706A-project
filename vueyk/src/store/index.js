import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { //存放共享的数据
        bookRack: [],
        isShow: false
    },
    mutations: { //修改state状态，并且修改状态的唯一途径就是提交mutations
        clickAddBook(state, actions) {
            if (state.bookRack.some(item => item.bookId === actions.newArr.bookId)) {
                console.log('本书已存在');
            } else {
                state.bookRack.push(actions.newArr);
                state.isShow = true;
            }
        }
    },
    actions: { //异步的

    },
    modules: {

    }
})