<template>
  <el-button type="info" @click="logout">退出</el-button>
</template>

<script>
export default {
  methods: {
    //点击按钮  清空sessionStorage 再重定向登录页面
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
</style>