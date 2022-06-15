<template>
<van-config-provider :theme="theme">
  <router-view />
</van-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ConfigProviderTheme } from 'vant'
const theme = ref<ConfigProviderTheme>('dark');

function setTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>
<style lang="scss" scoped></style>
