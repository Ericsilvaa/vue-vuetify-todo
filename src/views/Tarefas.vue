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



    <v-list
      flat
      subheader
    >

      <v-list-item-group
        multiple
        active-class=""
      >

      <div v-for="tarefa, i in $store.state.tarefas" :key="i">
        <Tarefa 
        :tarefa="tarefa"
        @ConcluidoTogger="tarefa.concluido = !tarefa.concluido"
        />
      </div>
       

      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import Tarefa from '@/components/Tarefas/Tarefa.vue';


export default {
    name: "TarefasView",
    components: { Tarefa },
    data() {
    return{
      campoInput: null,
      
    }
  },
  methods: {
    handleAddTarefa() {
      this.$store.commit('adicionaTarefa', this.campoInput)
      this.campoInput = null
    } 
  }
}
</script>