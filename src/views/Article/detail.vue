<template>
  <div class="container">

    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="http://localhost:3600/file/upload"
      multiple
      :on-success="success"
      :limit="3"
    >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>
  </div>
</template>

<script setup>
// import MarkdownEditor from '@/components/common/markdownEditor.vue'

const success = (res,uploadFile, uploadFiles) => {
  console.log(res,uploadFile, uploadFiles);
}

</script>

<style scoped>
header .test{
  color: red;
  font-size: 24px;
}
.container{
  height: 100vh;
  width: 100%;
}
</style>