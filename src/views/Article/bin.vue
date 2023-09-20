<template>
  <el-button @click="initData" type="primary">查 询</el-button>
  <el-button @click="goToDraft" type="primary">草稿箱</el-button>

  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column v-for="(item,index) in items" :key="index" fixed :prop="item.prop" :label="item.label" />
    <el-table-column fixed="right" label="操作" width="200">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="handleRestore(scope.row)"
        >
          恢复
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
import { getArticlePage, destroyArticle, restoreArticle } from '@/api/article.js'

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
    pageSize: 10,
    isDelete: true
  }
  const res = await getArticlePage(params)
  if (res.code == 200) {
    tableData.value = res.result.list
  }
}


function goToDraft(item) {
  router.push({
    path: '/article',
  })
}

async function handleDelete(item){
  const params = new FormData()
  params.append('id',item.id)
  const res = await destroyArticle(params)
  if (res.code == 200) {
    initData()
  }
}

async function handleRestore(item){
  const params = new FormData()
  params.append('id',item.id)
  const res = await restoreArticle(params)
  console.log(res);
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
