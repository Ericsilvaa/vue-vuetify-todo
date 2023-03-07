<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon dark>
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
        <v-icon left> {{item.icone}} </v-icon>
          <v-list-item-title :class="{}">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <DialogEditar 
      v-if="items[0].modal"
      @fechaModal="items[0].modal = false"
      :tarefa="tarefa"
    />

    <DialogDelete 
      v-if="items[1].modal"
      @fechaModal="items[1].modal = false"
      :tarefa="tarefa"
    />

  </div>
</template>
<script>
import DialogDelete from '../Dialogs/DialogDelete.vue';
import DialogEditar from '../Dialogs/DialogEditar.vue';

  export default {
    name: "TarefaMenu",
    components: { DialogEditar, DialogDelete },
    props: ['tarefa'],
    data: () => ({
        items: [
            {
              icone: "mdi-pencil",
              title: "Editar",
              modal: false,
              click() {
                this.modal = true
              }
            },
            {
              icone: "mdi-trash-can",
              title: "Deletar",
              modal: false,
              click() {
                this.modal = true
              }
            },
        ],
    }),
}
</script>