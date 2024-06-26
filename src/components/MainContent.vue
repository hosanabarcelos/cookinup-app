<script lang="ts">
import ShowRecipe from './ShowRecipe.vue';
import SelectIngredients from './SelectIngredients.vue';
import List from './List.vue';
import Tag from './Tag.vue';

type Page = 'SelectIngredients' | 'ShowRecipe';

export default {
  data() {
    return {
      ingredientes: [] as string[],
      conteudo: 'SelectIngredients' as Page
    };
  },
  components: { SelectIngredients, Tag, List, ShowRecipe },
  methods: {
    addIngredient(ingredient: string) {
      this.ingredientes.push(ingredient)
    },
    removeIngredient(ingredient: string) {
      this.ingredientes = this.ingredientes.filter(list => ingredient !== list);
    },
    navigate(page: Page) {
      this.conteudo = page;
    }
  }
}
</script>

<template>
  <main class="conteudo-principal">
    <List :ingredientes="ingredientes" />

    <KeepAlive include="SelectIngredients">
      <SelectIngredients v-if="conteudo === 'SelectIngredients'"
        @add-ingredient="addIngredient"
        @remove-ingredient="removeIngredient"
        @buscar-receitas="navigate('ShowRecipe')"
      />

      <ShowRecipe v-else-if="conteudo === 'ShowRecipe'"
        :ingredientes="ingredientes"
        @edit-recipes="navigate('SelectIngredients')"
      />
    </KeepAlive>
  </main>
</template>

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

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
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
