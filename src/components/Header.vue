
<template>
  <header class="header">
    <h1 class="header-desc">{{ msg }}</h1>
  </header>
</template>

<script>
export default{
  name: "HeaderMain",
  props:{
    msg: String
  }
}

</script>
<style scoped>
.header {
  background: rgb(197, 6, 6);
  min-height: 18vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-desc{
  color: #fff;
  text-align: center;
  font-size: 4rem;
}
</style>