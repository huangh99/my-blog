<template>
  <div class="content-wrapper" id="editor">
    <mavon-editor codeStyle="androidstudio" :ishljs = "true" v-model="state.content" style="height: 100%" @save="save"></mavon-editor>
    <!-- <mavon-editor codeStyle="stackoverflow-dark" defaultOpen="preview" :subfield="false" v-model="state.content" style="height: 100%" @save="save"></mavon-editor> -->
  </div>
</template>

<script setup>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { reactive, onMounted, onUnmounted } from 'vue'
const state = reactive({
  content:'',
  currentList: [],
  timer1: null,
  timer2: null
})

const save = (a,b) => {
  console.log(a);
  console.log(b);
  window.localStorage.setItem('content',a)
}







onMounted(() => {
  const res = window.localStorage.getItem('content')
  if(res){
    state.content = res
  }
})

onUnmounted(() => {

})


</script>

<style>
#editor {
  margin: auto;
  width: 70%;
  /* height: 580px; */
}
</style>