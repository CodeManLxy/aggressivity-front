<template>
  <div>
    <el-scrollbar height="100vh">
      <div class="top flex">
        <div class="top_left flex">
          <el-button class="transparent_btn logo">SexCat</el-button>
          <div
            class="top_menu flex"
            @mouseenter="menu = true"
            @mouseleave="menu = false"
          >
            <el-button class="transparent_btn">照片作品</el-button>
            <div class="menu" v-if="menu">
              <div class="menu_left">
                <p>热门作品</p>
                <p>最新作品</p>
                <p>新人作品</p>
              </div>
            </div>
          </div>
          <el-button class="transparent_btn">Coser</el-button>
        </div>
        <div class="top_right"></div>
      </div>
      <div class="banner flex">
        <div class="banner_left">
          <p>汇聚最优秀的Coser！</p>
          <el-button color="#ea4c89" class="pink_btn">注册</el-button>
        </div>
        <div class="banner_right">
          <img src="../../assets/images/banner.jpg" />
          <p>
            by Coser:
            <a href=""></a>
          </p>
        </div>
      </div>
      <div class="imgList">
        <div class="list_select flex">
          <el-select
            v-model="list_selectValue"
            style="width: 160px"
            :teleported="false"
          >
            <el-option
              v-for="item in list_selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
            <template #footer>
              <el-button class="transparent_btn">SexCat</el-button>
            </template>
          </el-select>
          <ul class="flex">
            <li v-for="item in imgLableList" :key="item.value">
              <el-button class="transparent_btn">{{ item.label }}</el-button>
            </li>
          </ul>
          <el-button color="#ea4c89" class="pink_btn">筛选</el-button>
        </div>
        <div class="img_list flex">
          <div class="img_card" v-for="item in 11" :key="item">
            <img src="../../assets/images/banner.jpg" alt="" />
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref(false);
const list_selectOptions = [
  {
    value: "0",
    label: "我的关注",
  },
  {
    value: "1",
    label: "热门作品",
  },
  {
    value: "2",
    label: "最新作品",
  },
];
const list_selectValue = ref("1");
const imgLableList = ref([
  { value: "0", label: "所有作品" },
  { value: "1", label: "动漫" },
  { value: "2", label: "游戏" },
  { value: "3", label: "古风" },
  { value: "4", label: "制服" },
  { value: "5", label: "洛丽塔" },
]);
</script>

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
  .top_menu {
    height: 100px;
  }
}
.menu {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-top: 20px;
  width: 500px;
  position: absolute;
  z-index: 1;
  top: 80px;
  left: 100px;
  border-radius: 12px;
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.15);
  background-color: #fff;
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
.banner {
  width: 100%;
  height: 500px;
  background-color: #f9f8fd;
  justify-content: space-around;
  .banner_left {
    p {
      font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
        sans-serif;
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 30px;
    }
  }
  .banner_right {
    img {
      height: 400px;
    }
    p {
      margin-top: 20px;
      font-family: "Noto Sans SC";
      font-weight: 600;
      text-align: end;
      color: #9e9ea7;
    }
  }
}
.imgList {
  padding: 10px 70px;
  background-color: #fff;
  .list_select {
    height: 80px;
    justify-content: space-between;
    :deep(.el-select__wrapper) {
      height: 45px;
      border-radius: 15px;
    }
    :deep(.el-select__selected-item) {
      font-weight: 600;
    }
    ul {
      flex: 1;
      overflow: hidden;
      li {
        margin: 20px;
        button {
          height: 40px;
          &:focus {
            color: black;
            height: 40px;
            background-color: #ccc;
            font-size: 18px;
            margin-left: 0px;
          }
        }
      }
    }
  }
  .img_list {
    flex-wrap: wrap;
    .img_card {
      width: 300px;
      height: 300px;
      overflow: hidden;
      cursor: pointer;
      object-fit: cover;
      margin: 20px 20px;
      img {
        height: 100%;
      }
    }
  }
}
:deep(.el-popper) {
  border-radius: 15px;
  span {
    font-weight: 600;
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
.pink_btn {
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  height: 40px;
  padding: 15px 20px;
}
</style>
