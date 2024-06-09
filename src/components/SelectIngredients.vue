<script lang="ts">
import { getCategories } from '@/http/index';
import type Category from '@/interfaces/Category';
import CategoryCard from './CategoryCard.vue';
import DefaultButton from './DefaultButton.vue';

export default {
  name: 'SelecionarIngredientes',
  data() {
    return {
      categories: [] as Category[]
    };
  },
  async created() {
    this.categories = await getCategories();
  },
  components: { CategoryCard, DefaultButton },
  emits: ['addIngredient', 'removeIngredient', 'buscarReceitas']
}
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
      <li v-for="category in categories" :key="category.nome">
        <CategoryCard
          :category="category"
          @add-ingredient="$emit('addIngredient', $event)"
          @remove-ingredient="$emit('removeIngredient', $event)"
        />
      </li>
    </ul>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>

    <DefaultButton text="Buscar receitas!" @click="$emit('buscarReceitas')" />
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
  margin-left: 8rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>