<template>
  <header>
    <input
      class="title-input"
      v-model="article.title"
      placeholder="请输入文章标题..."
      type="text"
    />
    <div class="right-box">
      <el-button>草稿箱</el-button>
      <el-button type="primary" @click="save">保 存</el-button>
      <el-button type="success" @click="publish">发 布</el-button>
    </div>
  </header>
  <div class="editor-container">
    <mavon-editor
      ref="md"
      v-model="article.content"
      :ishljs="true"
      style="height: 100%"
      @imgAdd="imgUpload"
    ></mavon-editor>
  </div>
  <footer>
    <div>字符数：{{ article.content.length }}</div>
  </footer>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessageBox } from 'element-plus'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { uploadFile } from '@/api/common.js'
import { addArticle, updateArticle, getArticleDetail } from '@/api/article.js'

const id = ref(null)
const md = ref(null)
const route = useRoute()

const article = reactive({
  title: '',
  content: '',
})

function initData() {
  if(route.query.id){
    id.value = route.query.id
    getDetail()
  }
}

async function getDetail(){
  const params = {
    id: id.value
  }
  const res = await getArticleDetail(params)
  if(res.code == 200){
    article.title = res.result.title
    article.content = res.result.content
  }
}

async function save() {
  const params = {
    title: article.title,
    content: article.content,
  }
  if (id.value) {
    params.id = id.value
    updateArticle(params)
  } else {
    const res = await addArticle(params)
    id.value = res.result.id
  }
}

function publish() {
  save()
  ElMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      type: 'warning',
    }
  )
}

async function imgUpload(pos, file) {
  const params = new FormData()
  params.append('file', file)
  const res = await uploadFile(params)
  md.value.$img2Url(pos, res.result.filePath)
}

onMounted(() => {
  initData()
})
</script>

<style scoped>
header {
  display: flex;
  height: 64px;
  padding: 0 32px;
  align-items: center;
  border-bottom: 1px solid var(--h-nav-bd-color);
}
header .title-input {
  height: 100%;
  border: none;
  font-size: 24px;
  flex: 1;
}
.editor-container {
  margin: auto;
  width: 100%;
  height: calc(100vh - 88px);
}
footer {
  height: 24px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--h-nav-bd-color);
  font-size: 12px;
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
