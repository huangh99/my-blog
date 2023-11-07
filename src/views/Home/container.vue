<template>
  <div class="page-container">
    <div class="card-list">
      <ArticleCard class="card-item" v-for="item in 10" :key="item"></ArticleCard>
    </div>
    <div class="slider-container"></div>

  </div>
</template>

<script setup>
import ArticleCard from '@/components/Article/articleCard.vue'
</script>

<style scoped>
.page-container{
  max-width: 1190px;
  margin: 30px auto;
  display: flex;
}
.card-list{
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card-item{
  width: 48%;
  /* width: 370px; */
}
.slider-container{
  width: 330px;
  margin-left: 50px;
  height: 500px;
  background-color: red;
}
</style>