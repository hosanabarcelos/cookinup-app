<template>
    <main class="conteudo-principal">
        <list :ingredientes="ingredientes" />
        <select-ingredients
            @add-ingredient="addIngredient"
        />
    </main>
</template>

<script lang="ts">
import SelectIngredients from './SelectIngredients.vue';
import List from './List.vue';

export default {
    components: {
        List,
        SelectIngredients
    },
    data() {
        return {
            ingredientes: [] as string[]
        }
    },
    methods: {
        addIngredient(ingrediente: string) {
            this.ingredientes.push(ingrediente)
        }
    }
}
</script>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
