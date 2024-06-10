<script lang="ts">
import Tag from './Tag.vue';

export default {
  components: { Tag },
  props: {
    ingrediente: {
        type: String,
        required: true
    }
  },
  data() {
    return {
      selecionado: false
    }
  },
  methods: {
    aoClicar() {
      this.selecionado = !this.selecionado

      if (this.selecionado) {
        this.$emit('addIngredient', this.ingrediente)
      } else {
        this.$emit('removeIngredient', this.ingrediente);
      }
    }
  },
  emits: ['addIngredient', 'removeIngredient']
}
</script>

<template>
  <button

    class="ingrediente"
    @click="aoClicar"
    :aria-pressed="selecionado"
  >
    <Tag :text="ingrediente" :active="selecionado" />
  </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>