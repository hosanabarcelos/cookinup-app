<template>
    <button
        class="ingrediente__tag"
        @click="setIngredient"
        :aria-pressed="selected"
    >
        <tag :text="ingrediente" :active="selected"/>
    </button>
</template>

<script lang="ts">
import Tag from '../components/Tag.vue';

export default {
    data() {
        return {
            selected: false
        }
    },
    components: {
        Tag,
    },
    props: {
        ingrediente: {
            type: String,
            required: true
        }
    },
    methods: {
        setIngredient() {
            this.selected = !this.selected

            if(this.selected) {
                this.$emit('addIngredient', this.ingrediente);
            }
        }
    },
    emits: ['addIngredient']
}
</script>

<style scoped>
.ingrediente__tag {
    cursor: pointer;
}
</style>