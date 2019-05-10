import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openTab: [],
    activeIndex: '/FuncForm',
    keepAliveRouter: []
  },
  mutations: {
    add_tab(state, data){
      state.openTab.push(data);
    },
    delete_tab(state, route){
      let index = 0;
      for(let option of state.openTab){
        if(option.route === route){
          break;
        }
        index++;
      }
      state.openTab.splice(index, 1)
    },
    set_active_tab(state, index){
      this.state.activeIndex = index
    },
    add_keepAliveRouter(state, data){
      this.state.keepAliveRouter.push(data)
    },
    delete_keepAliveRouter(state, route){
      let index = 0;
      for (let option of state.keepAliveRouter){
        if(option === route){
          break;
        }
        index++;
      }
      state.keepAliveRouter.splice(index, 1)
    }
  },
  actions: {

  }
})
