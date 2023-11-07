<template>
  <div class="container">
    <header>
      <h2>{{ article.title }}</h2>
    </header>
    <div class="editor-container">
      <mavon-editor
        ref="md"
        v-model="article.content"
        style="height: 100%"
        :ishljs="true"
        :subfield="false"
        defaultOpen="preview"
        previewBackground="#ffffff"
        :toolbarsFlag="false"
        :boxShadow="false"
      ></mavon-editor>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { getArticleDetail } from '@/api/article.js'

const md = ref(null)
const route = useRoute()

const article = reactive({
  title: '',
  content: '',
})

async function initData(){
  const id = route.query.id
  const params = {
    id: id
  }
  const res = await getArticleDetail(params)
  if(res.code == 200){
    article.title = res.result.title
    article.content = res.result.content
  }
}

onMounted(() => {
  initData()
})
</script>

<style scoped>
.container{
  background-color: #f2f3f5;
}
header {
  width: 50%;
  height: 64px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.editor-container {
  margin: auto;
  width: 50%;
  height: calc(100vh - 64px);
}

:deep(ol) {
  list-style: decimal outside none;
}
:deep(ul) {
  list-style: disc outside none;
}
:deep(em) {
  font-style: italic;
}
</style>
