<template>
  <div>

    <drop-list 
      :items="tarefasOrdenadas" 
      @reorder="$event.apply(tarefasOrdenadas)" 
    >
      <template v-slot:item="{ item, reorder }">
        <drag 
          :key="item.id" 
          :data="item" 
        >
          <!-- <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-html="item.titulo" />
          </v-list-item-content>
        </v-list-item> -->
        
        <Tarefa 
          style="background-color: white"
          :style="reorder ? { borderLeft: '2px solid #1976D2', marginLeft: '-2px' } : {}"
          :tarefa="item"
          @ConcluidoTogger="$store.dispatch('concluirTarefa', item)"

        />

          <v-divider />
        </drag>
      </template>
    </drop-list>


  </div>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import Tarefa from "./Tarefa.vue";

export default {
  components: {
    Drag,
    DropList,
    Tarefa
  },
  computed: {
    tarefasOrdenadas(){
      return this.$store.state.tarefas
    }
  }


}


</script>