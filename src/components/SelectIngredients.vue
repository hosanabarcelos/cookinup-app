<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">ingredientes</h1>
        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>
        <ul class="categorias">
            <li
                :key="categoria.nome"
                v-for="categoria in categorias"
            >
                <category-card
                    :categoria="categoria"
                />
            </li>
        </ul>
        <p class="paragrafo dica">
            Atenção: Consideramos que você tem em casa sal, pimenta e água.
        </p>
    </section>
</template>

<script lang="ts">
import { getCategories } from '@/http/index';
import type Category from '@/interfaces/Category';
import CategoryCard from './CategoryCard.vue';

export default {
    components: {
        CategoryCard
    },
    data() {
        return {
            categorias: [] as Category[],
        }
    },

    async created() {
        this.categorias = await getCategories();
    }
}
</script>

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
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
