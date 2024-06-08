<template>
    <article class="categoria">
        <header class="categoria__cabecalho">
            <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">

            <h class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h>
        </header>
        <ul class="categoria__ingredientes">
            <li
                :key="ingrediente"
                v-for="ingrediente in categoria.ingredientes"
            >
                <Tag
                    :text="ingrediente"
                />
            </li>
        </ul>
    </article>
</template>

<script lang="ts">
import type Category from '@/interfaces/Category';
import { PropType } from 'vue';
import Tag from './Tag.vue';

export default {
    components: {
        Tag
    },
    props: {
        categoria: {
             type: Object as PropType<Category>,
             required: true
        }
    }
}
</script>

<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>