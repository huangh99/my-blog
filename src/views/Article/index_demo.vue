<template>
  <el-button @click="initData" type="primary">查 询</el-button>
  <el-button @click="addArticle" type="primary">新 增</el-button>
  <el-button @click="goToBin" type="primary">回收站</el-button>

  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column v-for="(item,index) in items" :key="index" fixed :prop="item.prop" :label="item.label" />
    <el-table-column fixed="right" label="操作" width="200">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="goToDetail(scope.row)"
        >
          查看
        </el-button>
        <el-button
          link
          type="warning"
          size="small"
          @click.prevent="goToEditor(scope.row)"
        >
          编辑
        </el-button>
        <el-button
          link
          type="danger"
          size="small"
          @click.prevent="handleDelete(scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getArticlePage, deleteArticle } from '@/api/article.js'

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
  initData()
})
</script>

<style scoped>
.list-item {
  margin-bottom: 5px;
  cursor: pointer;
}

.list-item:hover {
  color: #ccc;
}
</style>
