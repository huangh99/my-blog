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
    <mavon-editor v-model="content" :ishljs="false" style="height: 100%"></mavon-editor>
  </div>
  <footer>
    <div>字符数：{{ content.length }} </div> 
  </footer>

    
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import "mavon-editor/dist/markdown/github-markdown.min.css";
import hljs from "mavon-editor/dist/highlightjs/highlight.min.js";
import "mavon-editor/dist/highlightjs/styles/github-dark-dimmed.min.css";

const title = ref('')
const content = ref('')

function save() {
  window.localStorage.setItem('content',content.value)
}

function publish(){
  setStyle()
}

function setStyle(){
  const code = document.querySelectorAll('.v-note-show pre code')[0];
  const pre = code.parentElement;
  const lang = code.className;
  const icon = `<div class="mac-icon">` +
              `<div class="left-mac-icon">` +
              `<span class="mac-icon-red"></span>` +
              `<span class="mac-icon-yellow"></span>` +
              `<span class="mac-icon-green"></span>` +
              `</div><div class="right-mac-icon">` +
              `<span class="mac-icon-lang">${lang.split('-')[1]}</span>` +
              `<div class="copy-button">复制</div>` +
              `</div></div>`;
  pre.insertAdjacentHTML('afterbegin', icon);
  hljs.highlightBlock(code);
}

onMounted(() => {
  const data = window.localStorage.getItem('content')
  if(data){
    content.value = data
  }

  nextTick(()=>{

    setStyle()
  })
  
})

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

:deep(.mac-icon) {
  border-bottom: 1px solid silver;
  margin-bottom: 5px;
  /* color: deeppink; */
  display: flex;
  justify-content: space-between;
}

:deep(.mac-icon) > .left-mac-icon span {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

:deep(.mac-icon-red) {
  background-color: red;
}

:deep(.mac-icon-yellow) {
  margin-left: 10px;
  background-color: yellow;
}

:deep(.mac-icon-green) {
  margin-left: 10px;
  background-color: green;
}
:deep(.mac-icon) > .right-mac-icon{
  display: flex;
}

:deep(.mac-icon-lang) {
  font-size: 14px;
  color: #fff;
  cursor: default;
}
:deep(.copy-button) {
  width: 40px;
  height: 20px;
  color: #fff;
  text-align: center;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
}

:deep(.copy-button):hover {
  opacity: .8;
}
</style>