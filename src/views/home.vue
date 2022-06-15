<template>
  <div>
    <p>我在about页面引入van-button了，所以这个样式就挂掉了</p>
    <van-action-bar>
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-button type="warning" text="加入购物车" />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script setup>
import { Toast } from 'vant';
Toast('111')
</script>
<style lang="scss" scoped></style>
