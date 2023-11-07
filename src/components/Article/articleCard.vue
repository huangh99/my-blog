<template>
  <div class="card-container">
    <div class="img-container">
      <img src="image/1.jpg" alt="">
    </div>
    <div class="tag-container">
      <span>随笔</span>
      <span>日记</span>
    </div>
    <h3><a href="">TypeChat 入门指南TypeChat 入门指南TypeChat 入</a></h3>
    <div class="info-container">
      <div class="avatar">
        <img src="image/1.jpg" alt="">
      </div>
      <span>2022-10-10</span>
    </div>
    <p class="describe-text">
      TypeChat 是一个革命性的库，它简化了使用 TypeScript 构建自然语言模型界面的过程。 传统模式下，创建自然语言模型界面是一项复杂的任务，通常依赖复杂的决策树来确定意图并收集行动所需的输入。 随着大型语言模型（LLM）的出现，这个过程变得更加容易，但它也带来了新的挑战，例如限制模型回复的安全性、构建响应以供进一步处理以及确保模型回复的有效性
    </p>
    <div class="btn-more">查看更多</div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.card-container{
  width: 370px;
  margin-bottom: 50px;
  &:hover .img-container img{
    transform: scale(1.2);
  }
}
.img-container{
  width: 100%;
  overflow: hidden;

  img{
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
}
.tag-container{
  margin: 10px 0;
  span{
    margin-right: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #be967f;
    cursor: pointer;
  }
}
.card-container h3 a{
  font-size: 23px;
  font-weight: bold;
  line-height: 1.6;
  text-decoration : none;
  color: #000;
  background-image: linear-gradient(to right,#be967f 0,#EAEAEA 100%);
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: all .4s ease;
  cursor: pointer;

  &:hover{
    background-size: 100% 2px;
  }
}
.info-container{
  height: 30px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 13px;
  color: #0a0a0ab3;
  .avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #4b4f56;
    overflow: hidden;

    .img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.describe-text{
  margin-bottom: 10px;
  font-size: 15px;
  color: #4b4f56;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.btn-more{
  width: fit-content;
  padding-bottom: 4px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: .1em;
  color: #000;
  border-bottom: 1px solid #be967f;
  cursor: pointer;
}
</style>