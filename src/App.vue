<script lang="ts">
import Banner from './components/Banner.vue';
import MainContent from './components/MainContent.vue';
import DefaultFooter from './components/DefaultFooter.vue';

export default {
  components: { Banner, MainContent, DefaultFooter }
}
</script>

<template>
  <Banner />
  <MainContent />
  <DefaultFooter />
</template>
