import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      { id:1, titulo:'Ir ao Mercado', concluido: false},
      { id:2, titulo:'Arrumar a Mala', concluido: false},
    ]
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state, titulo) {
      if(titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
      }
    },
    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
    editarTarefa(state, newTarefa) {
      let tarefa = state.tarefas.filter(tarefa => tarefa.id == newTarefa.id)[0]
      tarefa.titulo = newTarefa.titulo
      
    }
  },
  actions: {
  },
  modules: {
  }
})
