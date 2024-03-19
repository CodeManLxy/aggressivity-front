<template>
  <div class="top">
    <p>舔狗日记</p>
    <p>我们是狗，舔狗</p>
  </div>
  <div class="center">
    <p>你说月亮很美，我说不如你美，你说我不要脸，我哭了!</p>
    <div class="center_btn">
      <el-button color="#ffe21d">舔狗之家</el-button>
      <p>舔狗之家已上线</p>
      <p>欢迎舔狗们入住</p>
    </div>
    <div class="center_bottom">
      <el-button class="text_btn">投稿</el-button>
      <el-button class="img_btn"
        ><img src="../../assets/icon/医疗_舌头.png" alt=""
      /></el-button>
      <el-button class="text_btn">复制</el-button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.top {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-shadow: 3px 0px 5px 1px rgba(0, 0, 0, 0.7);
  font-family: "nailaoti";
  p:first-child {
    font-size: 20px;
    font-weight: 600;
    font-family: "nailaoti";
  }
}
.center {
  width: 100%;
  padding-top: 200px;
  background-color: #f4f5fd;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  p:first-child {
    text-align: center;
    font-size: 40px;
    letter-spacing: 5px;
    font-family: "nailaoti";
  }
  .center_btn {
    margin-top: 200px;
    :deep(.el-button) {
      height: 70px;
      width: 200px;
      border-radius: 35px;
      span {
        font-size: 30px;
      }
    }
    p {
      font-size: 14px;
      text-align: center;
      color: #c3c7e4;
    }
    p:nth-child(2) {
      margin-top: 10px;
    }
  }
  .center_bottom {
    margin-top: 50px;
    .text_btn {
      border: none;
      color: #367ce8;
      background-color: transparent;
      font-size: 25px;
    }
    .img_btn {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      border: none;
      box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
      img {
        width: 40px;
      }
    }
  }
}
</style>
