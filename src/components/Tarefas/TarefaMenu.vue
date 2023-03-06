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
  </div>
</template>
<script>
  export default {
    name: 'TarefaMenu',
    data: () => ({
      items: [
        { 
          icone: 'mdi-pencil', 
          title: "Editar",
          click() {

          }
      },
        { 
          icone: 'mdi-trash-can', 
          title: "Deletar",
          
        click() {
            
          }
      },
      ],
    }),
  
  }
</script>