<template>
  <div>
    <div class="top flex">
      <div class="top_left">
        <span>SexCat</span>
        <el-popover :width="400">
          <template #reference>
            <span>照片作品</span>
            
          </template>
          <div>okk</div>
        </el-popover>
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
    span {
      font-size: 50px;
      color: #063fe1;
    }
  }
}
</style>
