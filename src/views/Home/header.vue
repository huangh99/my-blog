<template>
  <header>
    <div class="container">
      <div class="title">Mr Huang</div>
      <div class="content">
        <div class="search-container"></div>
        <nav>
          <a href="">指引</a>
          <div class="nav-group">
            <div class="button">
              <span>前端基础</span>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="text-icon" data-v-a62181fa=""><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>
            </div>
            <div class="menu">
              <a class="menu-item" v-for="(item,index) in menuList" :key="index" @click="goToPath(item.path)">{{ item.label }}</a>
            </div>
          </div>
        </nav>
        <div class="switch-container">
          <Switch></Switch>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Switch from '@/components/Header/switch.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const menuList = [{
  label:'文章列表',
  path:'/article'
},{
  label:'文章详情',
  path:'/article/detail'
},{
  label:'新增文章',
  path:'/article/editor'
}]

const goToPath = (path)=>{
  router.push(path)
}

</script>

<style scoped lang="scss">
header {
  padding: 0 32px;
  background-color: var(--h-bg-color);
  border-bottom: 1px solid var(--h-nav-bd-color);
  user-select: none;
  position: fixed;
  width: 100%;
}

.container {
  display: flex;
  height: 64px;
  max-width: calc(100% - 64px);
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  pointer-events: auto;
}

.title {
  font-size: 16px;
  font-weight: bold;
  color: var(--h-text-color-1);
}
.container .content {
  display: flex;
  font-size: 14px;
}

.content nav{
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--h-text-color-1);
  transition: color 0.25s;
}
nav a:hover {
  color: var(--h-text-hover-color-1);
}

nav .nav-group{
  position: relative;
  height: 64px;
  line-height: 64px;
}

.nav-group .button{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  color: var(--h-text-color-1);
  cursor: pointer;
  transition: color .25s;
}

.nav-group:hover .button{
  color: var(--h-text-hover-color-2);
}

.button .text-icon{
  width: 14px;
  height: 14px;
  margin-left: 4px;
  fill: currentColor;
}
.nav-group .menu{
  position: absolute;
  right: 0;
  top: calc((64px/2) + 20px);
  min-width: 128px;
  padding: 12px;
  border: 1px solid var(--h-menu-bd-color);
  border-radius: 12px;
  background-color: var(--h-menu-bg-color);
  box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
  opacity: 0;
  visibility: hidden;
  transition: all .25s;
}
.nav-group:hover .menu{
  opacity: 1;
  visibility: visible;
}
.menu .menu-item{
  display: block;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--h-text-color-1);
  white-space: nowrap;
  border-radius: 6px;
  transition: all .25s;
}
.menu .menu-item:hover{
  color: var(--h-text-hover-color-1);
  background-color: var(--h-link-hover-bg-color);
}

.switch-container{
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
