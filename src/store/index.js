import Vue from 'vue'
import Vuex from 'vuex'

// Armazenamento
import Localbase from 'localbase'
let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: []
  },
  getters: {
  },
  mutations: {
    buscaTarefa(state) {
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB
      })
    },
    
    adicionaTarefa(state, titulo) {
      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido: false
      })
      
    },
    // removeTarefa(state, id) {
    //   state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    // },

    // editaTarefa(state, newTarefa) {
    //   // let tarefa = state.tarefas.filter(tarefa => tarefa.id == newTarefa.id)[0]
    //   // tarefa.titulo = newTarefa.titulo
    
    //   db.collection('tarefas').doc({ id: newTarefa.id }).update({
    //     titulo: newTarefa.titulo
    //   })
    // }

    // REMOVIDO POIS ESTÁ NA ACTION - ?editarTarefa?
    
  },
  actions: {
    async adicionaTarefa({commit}, titulo) {
      await commit('adicionaTarefa', titulo)
      await commit('buscaTarefa')
    },
    editaTarefa({commit}, newTarefa){
      db.collection('tarefas').doc({ id: newTarefa.id }).update({
        titulo: newTarefa.titulo
      }).then (() => {
          commit('buscaTarefa')
      })
    },
    removeTarefa({commit}, id) {
      db.collection('tarefas').doc({ id }).delete()
        .then(() => {
          commit('buscaTarefa')
        })
    }
  },
  modules: {
  }
})
