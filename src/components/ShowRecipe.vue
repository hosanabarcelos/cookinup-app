<script lang="ts">
import { itemOfList } from '@/operations/lists';
import type { PropType } from 'vue';
import { getRecipes } from '@/http';
import type Recipe from '@/interfaces/Recipe';
import DefaultButton from './DefaultButton.vue';
import RecipeCard from './RecipeCard.vue';

export default {
  props: {
    ingredientes: { type: Array as PropType<string[]>, required: true }
  },
  data() {
    return {
      recipesFound: [] as Recipe[]
    };
  },
  async created() {
    const recipes = await getRecipes();

    this.recipesFound = recipes.filter((recipe) => {
      // verifica se posso fazer receita:
      // todos os ingredientes de uma receita devem estar inclusos na minha lista de ingredientes
      // se sim, retorno `true`

      const hasRecipe = itemOfList(recipe.ingredientes, this.ingredientes);

      return hasRecipe;
    })
  },
  components: { DefaultButton, RecipeCard },
  emits: ['editRecipes']
}
</script>

<template>
  <section class="mostrar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>

    <p class="paragrafo-lg resultados-encontrados">
      Resultados encontrados: {{ recipesFound.length }}
    </p>

    <div v-if="recipesFound.length" class="receitas-wrapper">
      <p class="paragrafo-lg informacoes">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
      </p>

      <ul class="receitas">
        <li v-for="receita of recipesFound" :key="receita.nome">
          <RecipeCard :recipe="receita" />
        </li>
      </ul>
    </div>

    <div v-else class="receitas-nao-encontradas">
      <p class="paragrafo-lg receitas-nao-encontradas__info">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
      </p>

      <img src="../assets/imagens/sem-receitas.png"
        alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
    </div>

    <DefaultButton text="Editar lista" @click="$emit('editRecipes')" />
  </section>
</template>

<style scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 1.5rem;
}

.resultados-encontrados {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 0.5rem;
}

.receitas-wrapper {
  margin-bottom: 3.5rem;
}

.informacoes {
  margin-bottom: 2rem;
}

.receitas {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receitas-nao-encontradas {
  margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
