<template>
  <header>
    <input class="title-input" v-model="title" placeholder="请输入文章标题..." type="text">
    <div class="right-box">
      <el-button>草稿箱</el-button>
      <el-button type="primary" @click="save">保 存</el-button>
      <el-button type="success" @click="publish">发 布</el-button>
    </div>
  </header>
  <div class="editor-container">
    <mavon-editor v-model="content" style="height: 100%"></mavon-editor>
  </div>
  <footer>
    <div>字符数：{{ content.length }} </div> 
  </footer>

    
</template>

<script setup>
import { ref } from 'vue'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

const title = ref('')
const content = ref('')

function save() {

}

function publish(){
  console.log(title.value);
  console.log(content.value);
}

</script>

<style scoped>
header{
  display: flex;
  height: 64px;
  padding: 0 32px;
  align-items: center;
  border-bottom: 1px solid var(--h-nav-bd-color);
}
header .title-input{
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
footer{
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