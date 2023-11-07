<template>
  <div class="page-wrapper">
    <div class="page-container">
      <div class="left-nav">
        <div>2222</div>
        <div>2222</div>
        <div>2222</div>
        <div>2222</div>
        <div>2222</div>
        <div>2222</div>
        <div>2222</div>
        <div>2222</div>
        <div>2222</div>
        <div>2222</div>
      </div>

      <div class="main-container">
        <div class="main-list">
          <ArticleItem v-for="item in 20" :key="item"></ArticleItem>
        </div>
        <div class="main-aside"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getArticlePage, deleteArticle } from '@/api/article.js'
import ArticleItem from '@/components/Article/articleItem.vue'

const tableData = ref([])
const router = useRouter()
const items = [{
  label:'标题',
  prop:'title'
},{
  label:'标题',
  prop:'title'
}]

async function initData() {
  const params = {
    pageNum: 1,
    pageSize: 10
  }
  const res = await getArticlePage(params)
  if (res.code == 200) {
    tableData.value = res.result.list
  }
}


function goToDetail(item) {
  router.push({
    path: '/article/detail',
    query: {
      id: item.id
    }
  })
}

function goToEditor(item) {
  router.push({
    path: '/article/editor',
    query: {
      id: item.id
    }
  })
}

function addArticle() {
  router.push('/article/editor')
}

function goToBin(){
  router.push('/article/bin')
}

async function handleDelete(item){
  const params = new FormData()
  params.append('id',item.id)
  const res = await deleteArticle(params)
  if (res.code == 200) {
    initData()
  }
}

onMounted(() => {
  console.log(666666);
  // initData()
})
</script>

<style scoped>
.page-wrapper{
  /* position: relative; */
  width: 100%;
  min-height: 100vh;
  padding-top: 64px;
  background-color: var(--h-body-bg-color);
}
.page-container{
  max-width: 1200px;
  margin: 20px auto 0;
  display: flex;
}
.left-nav{
  position: sticky;
  top: 84px;
  width: 180px;
  height: 500px;
  margin-right: 20px;
  border-radius: 4px;
  background-color: var(--h-bg-color);
}
.main-container{
  /* margin: 0 auto; */
  /* position: relative; */
  display: flex;
}
.main-list{
  width: 720px;
  border-radius: 4px;
  background-color: var(--h-bg-color);
}
.main-aside{
  width: 260px;
  height: 300px;
  margin-left: 20px;
  /* position: absolute;
  right: 0;
  top: 0; */
  border-radius: 4px;
  background-color: var(--h-bg-color);
}


</style>
