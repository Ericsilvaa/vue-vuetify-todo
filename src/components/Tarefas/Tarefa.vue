<template >
  <div>
    <v-list-item 
      :class="{'blue lighten-5': tarefa.concluido}"
      @click="$emit('ConcluidoTogger')"
    >
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title 
                :class="{'text-decoration-line-through': tarefa.concluido }"
              > {{ tarefa.titulo }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <!-- <v-btn  icon @click.stop="handleRemoveTarefa(tarefa.id)">
                <v-icon color="red lighten-2">mdi-trash-can</v-icon>
              </v-btn> -->

              <TarefaMenu :tarefa="tarefa"/>
            </v-list-item-action>
          </template>

        </v-list-item>
        <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from '@/components/Tarefas/TarefaMenu.vue';

export default {
  name: 'OnlyTarefa',
  components: {TarefaMenu},
  props:['tarefa'],
  methods:{
    handleRemoveTarefa(id) {
      this.$store.commit('removeTarefa', id)
    }

  }
  
}
</script>
