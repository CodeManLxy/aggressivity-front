<template>
  <div>
    <div class="top flex">
      <div class="top_left">
        <el-button class="transparent_btn logo">SexCat</el-button>
        <el-button class="transparent_btn">照片作品</el-button>
        <div class="menu">
          <div class="menu_left">
            <p>热门作品</p>
            <p>最新作品</p>
          </div>
        </div>
        <el-button class="transparent_btn">Coser</el-button>
      </div>
      <div class="top_right"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.top {
  width: 100%;
  height: 100px;
  background-color: white;
  justify-content: space-between;
  .top_left {
    margin-left: 20px;
    margin-right: 30px;
    .logo {
      font-size: 26px;
      color: #063fe1;
      font-weight: 600;
    }
  }
}
.menu {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-top: 20px;
  width: 500px;
  // display: none;
  position: absolute;
  z-index: 1;
  top: 80px;
  left: 100px;
  border-radius: 12px;
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.15);
  .menu_left {
    p {
      margin-bottom: 30px;
      color: #0d0c22;
      font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
        sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
  }
}

.transparent_btn {
  border: none;
  color: #6e6d7a;
  font-weight: 600;
  font-size: 14px;
  &:hover {
    background-color: transparent;
    color: black;
    font-size: 18px;
    margin-left: 0px;
  }
  &:focus {
    background-color: transparent;
  }
}
</style>
