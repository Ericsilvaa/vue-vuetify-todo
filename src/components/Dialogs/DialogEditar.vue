<template >
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar 
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-2">Informe o novo titulo</v-card-text>
        <v-text-field
          class="px-3"
          label="Titulo"
          v-model="titulo"
          outlined
          ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            text
            @click="$emit('fechaModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="handleEditar"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'DialogEditar',
    props: ['tarefa'],
    data () {
      return {
        dialog: true,
        titulo: null,
      }
    },
    methods: {
      handleEditar() {
        let newTarefa = {
          titulo: this.titulo,
          id: this.tarefa.id
        }

        this.$store.dispatch('editaTarefa', newTarefa)
        this.$emit('fechaModal')
      }
    },
    created(){
      this.titulo = this.tarefa.titulo
    }
  }
</script>
