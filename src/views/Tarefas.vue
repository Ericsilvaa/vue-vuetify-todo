<template>
  <div>

    <v-col
      cols="12"
      sm="6"
      md="4"
    >
    <v-text-field
      v-model="campoInput"
      label="Tarefa"
      placeholder="Qual sua Tarefa?"
      outlined
      dense
      @keyup.enter="handleAddTarefa"
    ></v-text-field>
    </v-col>

  
  <ListaTarefas 
    />

  </div>
</template>
<script>
import ListaTarefas from '@/components/Tarefas/ListaTarefas.vue';


export default {
    name: "TarefasView",
    components: { ListaTarefas },
    data() {
    return{
      campoInput: null,
      
    }
  },
  methods: {
    handleAddTarefa() {
      // this.$store.commit('adicionaTarefa', this.campoInput)
      this.$store.dispatch('adicionaTarefa', this.campoInput)
      this.campoInput = null
    } 
  },
  created() {
    this.$store.commit('buscaTarefa')
  }
}
</script>