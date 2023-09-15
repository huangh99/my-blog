<template>
<div v-for="(item,index) in list" :key="index">{{item.title}}</div>
<div @click="submit">提交</div>
</template>

<script setup>
import { reactive, onMounted, ref, nextTick } from 'vue'
import { getArticlePage, addArticleInfo } from '@/api/article.js'
const list = ref([])

const initData = async ()=>{
  const res = await getArticlePage()
  list.value = res.result
}

const submit = async ()=>{
  const params = {
    title:'文章测试标题',
    content:'文章测试内容'
  }
  const res = await addArticleInfo(params)
  console.log(res);
}

onMounted(()=>{
  initData()
})

</script>

<style scoped>

</style>